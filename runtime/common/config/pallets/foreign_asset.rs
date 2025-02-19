use crate::{Runtime, RuntimeEvent, Balances};
use up_common::types::AccountId;

impl pallet_foreign_assets::Config for Runtime {
	type RuntimeEvent = RuntimeEvent;
	type Currency = Balances;
	type RegisterOrigin = frame_system::EnsureRoot<AccountId>;
	type WeightInfo = pallet_foreign_assets::weights::SubstrateWeight<Self>;
}
