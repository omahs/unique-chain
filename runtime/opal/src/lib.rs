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

//! The Substrate Node Template runtime. This can be compiled with `#[no_std]`, ready for Wasm.

#![cfg_attr(not(feature = "std"), no_std)]
// `construct_runtime!` does a lot of recursion and requires us to increase the limit to 256.
#![recursion_limit = "1024"]
#![allow(clippy::from_over_into, clippy::identity_op)]
#![allow(clippy::fn_to_numeric_cast_with_truncation)]
// Make the WASM binary available.
#[cfg(feature = "std")]
include!(concat!(env!("OUT_DIR"), "/wasm_binary.rs"));

use frame_support::parameter_types;

use sp_version::RuntimeVersion;
use sp_runtime::create_runtime_str;

use up_common::types::*;

#[path = "../../common/mod.rs"]
mod runtime_common;

pub mod xcm_barrier;

#[cfg(test)]
mod tests;

pub use runtime_common::*;

#[cfg(feature = "become-sapphire")]
pub const RUNTIME_NAME: &str = "sapphire";
#[cfg(feature = "become-sapphire")]
pub const TOKEN_SYMBOL: &str = "QTZ";

#[cfg(not(feature = "become-sapphire"))]
pub const RUNTIME_NAME: &str = "opal";
#[cfg(not(feature = "become-sapphire"))]
pub const TOKEN_SYMBOL: &str = "OPL";

/// This runtime version.
pub const VERSION: RuntimeVersion = RuntimeVersion {
	spec_name: create_runtime_str!(RUNTIME_NAME),
	impl_name: create_runtime_str!(RUNTIME_NAME),
	authoring_version: 1,
	spec_version: 930032,
	impl_version: 0,
	apis: RUNTIME_API_VERSIONS,
	transaction_version: 2,
	state_version: 0,
};

parameter_types! {
	pub const Version: RuntimeVersion = VERSION;
}
#[cfg(feature = "become-sapphire")]
parameter_types! {
	pub const SS58Prefix: u16 = 8883;
	pub const ChainId: u64 = 8883;
}

#[cfg(not(feature = "become-sapphire"))]
parameter_types! {
	pub const SS58Prefix: u16 = 42;
	pub const ChainId: u64 = 8882;
}

construct_runtime!(opal);

impl_common_runtime_apis!();

cumulus_pallet_parachain_system::register_validate_block!(
	Runtime = Runtime,
	BlockExecutor = cumulus_pallet_aura_ext::BlockExecutor::<Runtime, Executive>,
	CheckInherents = CheckInherents,
);
