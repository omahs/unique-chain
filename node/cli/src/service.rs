//! Service and ServiceFactory implementation. Specialized wrapper over substrate service.

//
// This file is subject to the terms and conditions defined in
// file 'LICENSE', which is part of this source code package.
//

// std
use std::sync::Arc;
use std::sync::Mutex;
use std::collections::BTreeMap;
use std::collections::HashMap;

// Local Runtime Types
use nft_runtime::RuntimeApi;

// Cumulus Imports
use cumulus_client_consensus_aura::{build_aura_consensus, BuildAuraConsensusParams, SlotProportion};
use cumulus_client_consensus_common::ParachainConsensus;
use cumulus_client_network::build_block_announce_validator;
use cumulus_client_service::{
	prepare_node_config, start_collator, start_full_node, StartCollatorParams, StartFullNodeParams,
};
use cumulus_primitives_core::ParaId;

// Polkadot Imports
use polkadot_primitives::v1::CollatorPair;

// Substrate Imports
use sc_client_api::ExecutorProvider;
pub use sc_executor::NativeExecutor;
use sc_executor::native_executor_instance;
use sc_network::NetworkService;
use sc_service::{BasePath, Configuration, PartialComponents, Role, TaskManager};
use sc_telemetry::{Telemetry, TelemetryHandle, TelemetryWorker, TelemetryWorkerHandle};
use sp_consensus::SlotData;
use sp_keystore::SyncCryptoStorePtr;
use sp_runtime::traits::BlakeTwo256;
use substrate_prometheus_endpoint::Registry;

// Frontier Imports
use fc_rpc_core::types::FilterPool;
use fc_rpc_core::types::PendingTransactions;

// Runtime type overrides
type BlockNumber = u32;
type Header = sp_runtime::generic::Header<BlockNumber, sp_runtime::traits::BlakeTwo256>;
pub type Block = sp_runtime::generic::Block<Header, sp_runtime::OpaqueExtrinsic>;
type Hash = sp_core::H256;

// Native executor instance.
native_executor_instance!(
	pub ParachainRuntimeExecutor,
	nft_runtime::api::dispatch,
	nft_runtime::native_version,
	frame_benchmarking::benchmarking::HostFunctions,
);

pub fn open_frontier_backend(config: &Configuration) -> Result<Arc<fc_db::Backend<Block>>, String> {
	let config_dir = config
		.base_path
		.as_ref()
		.map(|base_path| base_path.config_dir(config.chain_spec.id()))
		.unwrap_or_else(|| {
			BasePath::from_project("", "", "nft").config_dir(config.chain_spec.id())
		});
	let database_dir = config_dir.join("frontier").join("db");

	Ok(Arc::new(fc_db::Backend::<Block>::new(
		&fc_db::DatabaseSettings {
			source: fc_db::DatabaseSettingsSrc::RocksDb {
				path: database_dir,
				cache_size: 0,
			},
		},
	)?))
}

type Executor = ParachainRuntimeExecutor;

type FullClient = sc_service::TFullClient<Block, RuntimeApi, Executor>;
type FullBackend = sc_service::TFullBackend<Block>;
type FullSelectChain = sc_consensus::LongestChain<FullBackend, Block>;

/// Starts a `ServiceBuilder` for a full service.
///
/// Use this macro if you don't actually need the full service, but just the builder in order to
/// be able to perform chain operations.
#[allow(clippy::type_complexity)]
pub fn new_partial<BIQ>(
	config: &Configuration,
	build_import_queue: BIQ,
) -> Result<
	PartialComponents<
		FullClient,
		FullBackend,
		FullSelectChain,
		sp_consensus::DefaultImportQueue<Block, FullClient>,
		sc_transaction_pool::FullPool<Block, FullClient>,
		(
			Option<Telemetry>,
			PendingTransactions,
			Option<FilterPool>,
			Arc<fc_db::Backend<Block>>,
			Option<TelemetryWorkerHandle>,
		),
	>,
	sc_service::Error,
>
where
	sc_client_api::StateBackendFor<FullBackend, Block>: sp_api::StateBackend<BlakeTwo256>,
	Executor: sc_executor::NativeExecutionDispatch + 'static,
	BIQ: FnOnce(
		Arc<FullClient>,
		&Configuration,
		Option<TelemetryHandle>,
		&TaskManager,
	) -> Result<sp_consensus::DefaultImportQueue<Block, FullClient>, sc_service::Error>,
{
	let _telemetry = config
		.telemetry_endpoints
		.clone()
		.filter(|x| !x.is_empty())
		.map(|endpoints| -> Result<_, sc_telemetry::Error> {
			let worker = TelemetryWorker::new(16)?;
			let telemetry = worker.handle().new_telemetry(endpoints);
			Ok((worker, telemetry))
		})
		.transpose()?;

	let telemetry = config
		.telemetry_endpoints
		.clone()
		.filter(|x| !x.is_empty())
		.map(|endpoints| -> Result<_, sc_telemetry::Error> {
			let worker = TelemetryWorker::new(16)?;
			let telemetry = worker.handle().new_telemetry(endpoints);
			Ok((worker, telemetry))
		})
		.transpose()?;

	let (client, backend, keystore_container, task_manager) =
		sc_service::new_full_parts::<Block, RuntimeApi, Executor>(
			&config,
			telemetry.as_ref().map(|(_, telemetry)| telemetry.handle()),
		)?;
	let client = Arc::new(client);

	let telemetry_worker_handle = telemetry.as_ref().map(|(worker, _)| worker.handle());

	let telemetry = telemetry.map(|(worker, telemetry)| {
		task_manager.spawn_handle().spawn("telemetry", worker.run());
		telemetry
	});

	let select_chain = sc_consensus::LongestChain::new(backend.clone());

	let transaction_pool = sc_transaction_pool::BasicPool::new_full(
		config.transaction_pool.clone(),
		config.role.is_authority().into(),
		config.prometheus_registry(),
		task_manager.spawn_handle(),
		client.clone(),
	);

	let pending_transactions: PendingTransactions = Some(Arc::new(Mutex::new(HashMap::new())));

	let filter_pool: Option<FilterPool> = Some(Arc::new(Mutex::new(BTreeMap::new())));

	let frontier_backend = open_frontier_backend(config)?;

	let import_queue = build_import_queue(
		client.clone(),
		config,
		telemetry.as_ref().map(|telemetry| telemetry.handle()),
		&task_manager,
	)?;

	let params = PartialComponents {
		backend,
		client,
		import_queue,
		keystore_container,
		task_manager,
		transaction_pool,
		select_chain,
		other: (
			telemetry,
			pending_transactions,
			filter_pool,
			frontier_backend,
			telemetry_worker_handle,
		),
	};

	Ok(params)
}

/// Start a node with the given parachain `Configuration` and relay chain `Configuration`.
///
/// This is the actual implementation that is abstract over the executor and the runtime api.
#[sc_tracing::logging::prefix_logs_with("Parachain")]
async fn start_node_impl<BIQ, BIC>(
	parachain_config: Configuration,
	collator_key: CollatorPair,
	polkadot_config: Configuration,
	id: ParaId,
	build_import_queue: BIQ,
	build_consensus: BIC,
) -> sc_service::error::Result<(TaskManager, Arc<FullClient>)>
where
	sc_client_api::StateBackendFor<FullBackend, Block>: sp_api::StateBackend<BlakeTwo256>,
	Executor: sc_executor::NativeExecutionDispatch + 'static,
	BIQ: FnOnce(
		Arc<FullClient>,
		&Configuration,
		Option<TelemetryHandle>,
		&TaskManager,
	) -> Result<sp_consensus::DefaultImportQueue<Block, FullClient>, sc_service::Error>,
	BIC: FnOnce(
		Arc<FullClient>,
		Option<&Registry>,
		Option<TelemetryHandle>,
		&TaskManager,
		&polkadot_service::NewFull<polkadot_service::Client>,
		Arc<sc_transaction_pool::FullPool<Block, FullClient>>,
		Arc<NetworkService<Block, Hash>>,
		SyncCryptoStorePtr,
		bool,
	) -> Result<Box<dyn ParachainConsensus<Block>>, sc_service::Error>,
{
	if matches!(parachain_config.role, Role::Light) {
		return Err("Light client not supported!".into());
	}

	let parachain_config = prepare_node_config(parachain_config);

	let params = new_partial::<BIQ>(&parachain_config, build_import_queue)?;
	let (
		mut telemetry,
		pending_transactions,
		filter_pool,
		frontier_backend,
		telemetry_worker_handle,
	) = params.other;

	let relay_chain_full_node = cumulus_client_service::build_polkadot_full_node(
		polkadot_config,
		collator_key.clone(),
		telemetry_worker_handle,
	)
	.map_err(|e| match e {
		polkadot_service::Error::Sub(x) => x,
		s => format!("{}", s).into(),
	})?;

	let client = params.client.clone();
	let backend = params.backend.clone();
	let block_announce_validator = build_block_announce_validator(
		relay_chain_full_node.client.clone(),
		id,
		Box::new(relay_chain_full_node.network.clone()),
		relay_chain_full_node.backend.clone(),
	);

	let force_authoring = parachain_config.force_authoring;
	let validator = parachain_config.role.is_authority();
	let prometheus_registry = parachain_config.prometheus_registry().cloned();
	let transaction_pool = params.transaction_pool.clone();
	let mut task_manager = params.task_manager;
	let import_queue = cumulus_client_service::SharedImportQueue::new(params.import_queue);
	let (network, network_status_sinks, system_rpc_tx, start_network) =
		sc_service::build_network(sc_service::BuildNetworkParams {
			config: &parachain_config,
			client: client.clone(),
			transaction_pool: transaction_pool.clone(),
			spawn_handle: task_manager.spawn_handle(),
			import_queue: import_queue.clone(),
			on_demand: None,
			block_announce_validator_builder: Some(Box::new(|_| block_announce_validator)),
		})?;

	let subscription_executor = sc_rpc::SubscriptionTaskExecutor::new(task_manager.spawn_handle());
	let rpc_client = client.clone();
	let rpc_pool = transaction_pool.clone();
	let select_chain = params.select_chain.clone();
	let is_authority = parachain_config.role.clone().is_authority();
	let rpc_network = network.clone();
	let rpc_extensions_builder = Box::new(move |deny_unsafe, _| {
		let full_deps = nft_rpc::FullDeps {
			backend: frontier_backend.clone(),
			deny_unsafe,
			client: rpc_client.clone(),
			pool: rpc_pool.clone(),
			// TODO: Unhardcode
			enable_dev_signer: false,
			filter_pool: filter_pool.clone(),
			network: rpc_network.clone(),
			pending_transactions: pending_transactions.clone(),
			select_chain: select_chain.clone(),
			is_authority,
			// TODO: Unhardcode
			max_past_logs: 10000,
		};

		nft_rpc::create_full::<_, _, _, RuntimeApi, _>(full_deps, subscription_executor.clone())
	});

	sc_service::spawn_tasks(sc_service::SpawnTasksParams {
		on_demand: None,
		remote_blockchain: None,
		rpc_extensions_builder,
		client: client.clone(),
		transaction_pool: transaction_pool.clone(),
		task_manager: &mut task_manager,
		config: parachain_config,
		keystore: params.keystore_container.sync_keystore(),
		backend: backend.clone(),
		network: network.clone(),
		network_status_sinks,
		system_rpc_tx,
		telemetry: telemetry.as_mut(),
	})?;

	let announce_block = {
		let network = network.clone();
		Arc::new(move |hash, data| network.announce_block(hash, data))
	};

	if validator {
		let parachain_consensus = build_consensus(
			client.clone(),
			prometheus_registry.as_ref(),
			telemetry.as_ref().map(|t| t.handle()),
			&task_manager,
			&relay_chain_full_node,
			transaction_pool,
			network,
			params.keystore_container.sync_keystore(),
			force_authoring,
		)?;

		let spawner = task_manager.spawn_handle();

		let params = StartCollatorParams {
			para_id: id,
			block_status: client.clone(),
			announce_block,
			client: client.clone(),
			task_manager: &mut task_manager,
			collator_key,
			relay_chain_full_node,
			spawner,
			parachain_consensus,
			import_queue,
		};

		start_collator(params).await?;
	} else {
		let params = StartFullNodeParams {
			client: client.clone(),
			announce_block,
			task_manager: &mut task_manager,
			para_id: id,
			relay_chain_full_node,
		};

		start_full_node(params)?;
	}

	start_network.start_network();

	Ok((task_manager, client))
}

/// Build the import queue for the the parachain runtime.
pub fn parachain_build_import_queue(
	client: Arc<FullClient>,
	config: &Configuration,
	telemetry: Option<TelemetryHandle>,
	task_manager: &TaskManager,
) -> Result<sp_consensus::DefaultImportQueue<Block, FullClient>, sc_service::Error> {
	let slot_duration = cumulus_client_consensus_aura::slot_duration(&*client)?;

	cumulus_client_consensus_aura::import_queue::<
		sp_consensus_aura::sr25519::AuthorityPair,
		_,
		_,
		_,
		_,
		_,
		_,
	>(cumulus_client_consensus_aura::ImportQueueParams {
		block_import: client.clone(),
		client: client.clone(),
		create_inherent_data_providers: move |_, _| async move {
			let time = sp_timestamp::InherentDataProvider::from_system_time();

			let slot =
				sp_consensus_aura::inherents::InherentDataProvider::from_timestamp_and_duration(
					*time,
					slot_duration.slot_duration(),
				);

			Ok((time, slot))
		},
		registry: config.prometheus_registry(),
		can_author_with: sp_consensus::CanAuthorWithNativeVersion::new(client.executor().clone()),
		spawner: &task_manager.spawn_essential_handle(),
		telemetry,
	})
	.map_err(Into::into)
}

/// Start a normal parachain node.
pub async fn start_node(
	parachain_config: Configuration,
	collator_key: CollatorPair,
	polkadot_config: Configuration,
	id: ParaId,
) -> sc_service::error::Result<(TaskManager, Arc<FullClient>)> {
	start_node_impl::<_, _>(
		parachain_config,
		collator_key,
		polkadot_config,
		id,
		parachain_build_import_queue,
		|client,
		 prometheus_registry,
		 telemetry,
		 task_manager,
		 relay_chain_node,
		 transaction_pool,
		 sync_oracle,
		 keystore,
		 force_authoring| {
			let slot_duration = cumulus_client_consensus_aura::slot_duration(&*client)?;

			let proposer_factory = sc_basic_authorship::ProposerFactory::with_proof_recording(
				task_manager.spawn_handle(),
				client.clone(),
				transaction_pool,
				prometheus_registry,
				telemetry.clone(),
			);

			let relay_chain_backend = relay_chain_node.backend.clone();
			let relay_chain_client = relay_chain_node.client.clone();
			Ok(build_aura_consensus::<
				sp_consensus_aura::sr25519::AuthorityPair,
				_,
				_,
				_,
				_,
				_,
				_,
				_,
				_,
				_,
			>(BuildAuraConsensusParams {
				proposer_factory,
				create_inherent_data_providers: move |_, (relay_parent, validation_data)| {
					let parachain_inherent =
					cumulus_primitives_parachain_inherent::ParachainInherentData::create_at_with_client(
						relay_parent,
						&relay_chain_client,
						&*relay_chain_backend,
						&validation_data,
						id,
					);
					async move {
						let time = sp_timestamp::InherentDataProvider::from_system_time();

						let slot =
						sp_consensus_aura::inherents::InherentDataProvider::from_timestamp_and_duration(
							*time,
							slot_duration.slot_duration(),
						);

						let parachain_inherent = parachain_inherent.ok_or_else(|| {
							Box::<dyn std::error::Error + Send + Sync>::from(
								"Failed to create parachain inherent",
							)
						})?;
						Ok((time, slot, parachain_inherent))
					}
				},
				block_import: client.clone(),
				relay_chain_client: relay_chain_node.client.clone(),
				relay_chain_backend: relay_chain_node.backend.clone(),
				para_client: client,
				backoff_authoring_blocks: Option::<()>::None,
				sync_oracle,
				keystore,
				force_authoring,
				slot_duration,
				// We got around 500ms for proposing
				block_proposal_slot_portion: SlotProportion::new(1f32 / 24f32),
				telemetry,
			}))
		},
	)
	.await
}
