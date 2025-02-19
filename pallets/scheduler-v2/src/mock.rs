// Copyright 2019-2022 Unique Network (Gibraltar) Ltd.
// This file is part of Unique Network.

// Unique Network is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Unique Network is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Unique Network. If not, see <http://www.gnu.org/licenses/>.

// Original license:
// This file is part of Substrate.

// Copyright (C) 2017-2022 Parity Technologies (UK) Ltd.
// SPDX-License-Identifier: Apache-2.0

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// 	http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//! # Scheduler test environment.
#![allow(deprecated)]

use super::*;

use crate as scheduler;
use frame_support::{
	ord_parameter_types, parameter_types,
	traits::{ConstU32, ConstU64, Contains, EqualPrivilegeOnly, OnFinalize, OnInitialize},
	weights::constants::RocksDbWeight,
};
use frame_system::{EnsureRoot, RawOrigin};
use sp_core::H256;
use sp_runtime::{
	testing::Header,
	traits::{BlakeTwo256, IdentityLookup},
	Perbill,
};

// Logger module to track execution.
#[frame_support::pallet]
pub mod logger {
	use super::{OriginCaller, OriginTrait};
	use frame_support::{pallet_prelude::*, parameter_types};
	use frame_system::pallet_prelude::*;

	parameter_types! {
		static Log: Vec<(OriginCaller, u32)> = Vec::new();
	}
	pub fn log() -> Vec<(OriginCaller, u32)> {
		Log::get().clone()
	}

	#[pallet::pallet]
	pub struct Pallet<T>(PhantomData<T>);

	#[pallet::hooks]
	impl<T: Config> Hooks<BlockNumberFor<T>> for Pallet<T> {}

	#[pallet::config]
	pub trait Config: frame_system::Config {
		type RuntimeEvent: From<Event<Self>> + IsType<<Self as frame_system::Config>::RuntimeEvent>;
	}

	#[pallet::event]
	#[pallet::generate_deposit(pub(super) fn deposit_event)]
	pub enum Event<T: Config> {
		Logged(u32, Weight),
	}

	#[pallet::call]
	impl<T: Config> Pallet<T>
	where
		<T as frame_system::Config>::RuntimeOrigin: OriginTrait<PalletsOrigin = OriginCaller>,
	{
		#[pallet::call_index(0)]
		#[pallet::weight(*weight)]
		pub fn log(origin: OriginFor<T>, i: u32, weight: Weight) -> DispatchResult {
			Self::deposit_event(Event::Logged(i, weight));
			Log::mutate(|log| {
				log.push((origin.caller().clone(), i));
			});
			Ok(())
		}

		#[pallet::call_index(1)]
		#[pallet::weight(*weight)]
		pub fn log_without_filter(origin: OriginFor<T>, i: u32, weight: Weight) -> DispatchResult {
			Self::deposit_event(Event::Logged(i, weight));
			Log::mutate(|log| {
				log.push((origin.caller().clone(), i));
			});
			Ok(())
		}
	}
}

type UncheckedExtrinsic = frame_system::mocking::MockUncheckedExtrinsic<Test>;
type Block = frame_system::mocking::MockBlock<Test>;

frame_support::construct_runtime!(
	pub enum Test where
		Block = Block,
		NodeBlock = Block,
		UncheckedExtrinsic = UncheckedExtrinsic,
	{
		System: frame_system::{Pallet, Call, Config, Storage, Event<T>},
		Logger: logger::{Pallet, Call, Event<T>},
		Scheduler: scheduler::{Pallet, Call, Storage, Event<T>},
	}
);

// Scheduler must dispatch with root and no filter, this tests base filter is indeed not used.
pub struct BaseFilter;
impl Contains<RuntimeCall> for BaseFilter {
	fn contains(call: &RuntimeCall) -> bool {
		!matches!(call, RuntimeCall::Logger(LoggerCall::log { .. }))
	}
}

parameter_types! {
	pub BlockWeights: frame_system::limits::BlockWeights =
		frame_system::limits::BlockWeights::simple_max(
			Weight::from_ref_time(2_000_000_000_000).set_proof_size(u64::MAX)
		);
}
impl system::Config for Test {
	type BaseCallFilter = BaseFilter;
	type BlockWeights = BlockWeights;
	type BlockLength = ();
	type DbWeight = RocksDbWeight;
	type RuntimeOrigin = RuntimeOrigin;
	type RuntimeCall = RuntimeCall;
	type Index = u64;
	type BlockNumber = u64;
	type Hash = H256;
	type Hashing = BlakeTwo256;
	type AccountId = u64;
	type Lookup = IdentityLookup<Self::AccountId>;
	type Header = Header;
	type RuntimeEvent = RuntimeEvent;
	type BlockHashCount = ConstU64<250>;
	type Version = ();
	type PalletInfo = PalletInfo;
	type AccountData = ();
	type OnNewAccount = ();
	type OnKilledAccount = ();
	type SystemWeightInfo = ();
	type SS58Prefix = ();
	type OnSetCode = ();
	type MaxConsumers = ConstU32<16>;
}
impl logger::Config for Test {
	type RuntimeEvent = RuntimeEvent;
}
ord_parameter_types! {
	pub const One: u64 = 1;
}

pub struct TestWeightInfo;
impl WeightInfo for TestWeightInfo {
	fn service_agendas_base() -> Weight {
		Weight::from_ref_time(0b0000_0001)
	}
	fn service_agenda_base(i: u32) -> Weight {
		Weight::from_ref_time((i << 8) as u64 + 0b0000_0010)
	}
	fn service_task_base() -> Weight {
		Weight::from_ref_time(0b0000_0100)
	}
	fn service_task_periodic() -> Weight {
		Weight::from_ref_time(0b0000_1100)
	}
	fn service_task_named() -> Weight {
		Weight::from_ref_time(0b0001_0100)
	}
	// fn service_task_fetched(s: u32) -> Weight {
	// 	Weight::from_ref_time((s << 8) as u64 + 0b0010_0100)
	// }
	fn execute_dispatch_signed() -> Weight {
		Weight::from_ref_time(0b0100_0000)
	}
	fn execute_dispatch_unsigned() -> Weight {
		Weight::from_ref_time(0b1000_0000)
	}
	fn schedule(_s: u32) -> Weight {
		Weight::from_ref_time(50)
	}
	fn cancel(_s: u32) -> Weight {
		Weight::from_ref_time(50)
	}
	fn schedule_named(_s: u32) -> Weight {
		Weight::from_ref_time(50)
	}
	fn cancel_named(_s: u32) -> Weight {
		Weight::from_ref_time(50)
	}
	fn change_named_priority(_s: u32) -> Weight {
		Weight::from_ref_time(50)
	}
}
parameter_types! {
	pub MaximumSchedulerWeight: Weight = Perbill::from_percent(80) *
		BlockWeights::get().max_block;
}

pub struct EnsureSignedOneOrRoot;
impl<O: Into<Result<RawOrigin<u64>, O>> + From<RawOrigin<u64>>> EnsureOrigin<O>
	for EnsureSignedOneOrRoot
{
	type Success = ScheduledEnsureOriginSuccess<u64>;
	fn try_origin(o: O) -> Result<Self::Success, O> {
		o.into().and_then(|o| match o {
			RawOrigin::Root => Ok(ScheduledEnsureOriginSuccess::Root),
			RawOrigin::Signed(1) => Ok(ScheduledEnsureOriginSuccess::Signed(1)),
			r => Err(O::from(r)),
		})
	}
	#[cfg(feature = "runtime-benchmarks")]
	fn try_successful_origin() -> Result<O, ()> {
		Ok(O::from(RawOrigin::Root))
	}
}

pub struct Executor;
impl DispatchCall<Test, sp_core::H160> for Executor {
	fn dispatch_call(
		signer: Option<u64>,
		function: RuntimeCall,
	) -> Result<
		Result<PostDispatchInfo, DispatchErrorWithPostInfo<PostDispatchInfo>>,
		TransactionValidityError,
	> {
		let origin = match signer {
			Some(who) => RuntimeOrigin::signed(who),
			None => RuntimeOrigin::none(),
		};
		Ok(function.dispatch(origin))
	}
}

impl Config for Test {
	type RuntimeEvent = RuntimeEvent;
	type RuntimeOrigin = RuntimeOrigin;
	type PalletsOrigin = OriginCaller;
	type RuntimeCall = RuntimeCall;
	type MaximumWeight = MaximumSchedulerWeight;
	type ScheduleOrigin = EnsureSignedOneOrRoot;
	type MaxScheduledPerBlock = ConstU32<10>;
	type WeightInfo = TestWeightInfo;
	type OriginPrivilegeCmp = EqualPrivilegeOnly;
	type Preimages = ();
	type PrioritySetOrigin = EnsureRoot<u64>;
	type CallExecutor = Executor;
}

pub type LoggerCall = logger::Call<Test>;

pub type SystemCall = frame_system::Call<Test>;

pub fn new_test_ext() -> sp_io::TestExternalities {
	let t = system::GenesisConfig::default()
		.build_storage::<Test>()
		.unwrap();
	t.into()
}

pub fn run_to_block(n: u64) {
	while System::block_number() < n {
		Scheduler::on_finalize(System::block_number());
		System::set_block_number(System::block_number() + 1);
		Scheduler::on_initialize(System::block_number());
	}
}

pub fn root() -> OriginCaller {
	system::RawOrigin::Root.into()
}
