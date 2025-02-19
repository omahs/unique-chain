// Template adopted from https://github.com/paritytech/substrate/blob/master/.maintain/frame-weight-template.hbs

//! Autogenerated weights for pallet_maintenance
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2023-04-20, STEPS: `50`, REPEAT: `80`, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! WORST CASE MAP SIZE: `1000000`
//! HOSTNAME: `bench-host`, CPU: `Intel(R) Core(TM) i7-8700 CPU @ 3.20GHz`
//! EXECUTION: None, WASM-EXECUTION: Compiled, CHAIN: None, DB CACHE: 1024

// Executed Command:
// target/release/unique-collator
// benchmark
// pallet
// --pallet
// pallet-maintenance
// --wasm-execution
// compiled
// --extrinsic
// *
// --template=.maintain/frame-weight-template.hbs
// --steps=50
// --repeat=80
// --heap-pages=4096
// --output=./pallets/maintenance/src/weights.rs

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::{Weight, constants::RocksDbWeight}};
use sp_std::marker::PhantomData;

/// Weight functions needed for pallet_maintenance.
pub trait WeightInfo {
	fn enable() -> Weight;
	fn disable() -> Weight;
	fn execute_preimage() -> Weight;
}

/// Weights for pallet_maintenance using the Substrate node and recommended hardware.
pub struct SubstrateWeight<T>(PhantomData<T>);
impl<T: frame_system::Config> WeightInfo for SubstrateWeight<T> {
	/// Storage: Maintenance Enabled (r:0 w:1)
	/// Proof: Maintenance Enabled (max_values: Some(1), max_size: Some(1), added: 496, mode: MaxEncodedLen)
	fn enable() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 4_407_000 picoseconds.
		Weight::from_parts(4_556_000, 0)
			.saturating_add(T::DbWeight::get().writes(1_u64))
	}
	/// Storage: Maintenance Enabled (r:0 w:1)
	/// Proof: Maintenance Enabled (max_values: Some(1), max_size: Some(1), added: 496, mode: MaxEncodedLen)
	fn disable() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 5_868_000 picoseconds.
		Weight::from_parts(6_100_000, 0)
			.saturating_add(T::DbWeight::get().writes(1_u64))
	}
	/// Storage: Preimage StatusFor (r:1 w:0)
	/// Proof: Preimage StatusFor (max_values: None, max_size: Some(91), added: 2566, mode: MaxEncodedLen)
	/// Storage: Preimage PreimageFor (r:1 w:0)
	/// Proof: Preimage PreimageFor (max_values: None, max_size: Some(4194344), added: 4196819, mode: Measured)
	fn execute_preimage() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `209`
		//  Estimated: `7230`
		// Minimum execution time: 14_046_000 picoseconds.
		Weight::from_parts(14_419_000, 7230)
			.saturating_add(T::DbWeight::get().reads(2_u64))
	}
}

// For backwards compatibility and tests
impl WeightInfo for () {
	/// Storage: Maintenance Enabled (r:0 w:1)
	/// Proof: Maintenance Enabled (max_values: Some(1), max_size: Some(1), added: 496, mode: MaxEncodedLen)
	fn enable() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 4_407_000 picoseconds.
		Weight::from_parts(4_556_000, 0)
			.saturating_add(RocksDbWeight::get().writes(1_u64))
	}
	/// Storage: Maintenance Enabled (r:0 w:1)
	/// Proof: Maintenance Enabled (max_values: Some(1), max_size: Some(1), added: 496, mode: MaxEncodedLen)
	fn disable() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 5_868_000 picoseconds.
		Weight::from_parts(6_100_000, 0)
			.saturating_add(RocksDbWeight::get().writes(1_u64))
	}
	/// Storage: Preimage StatusFor (r:1 w:0)
	/// Proof: Preimage StatusFor (max_values: None, max_size: Some(91), added: 2566, mode: MaxEncodedLen)
	/// Storage: Preimage PreimageFor (r:1 w:0)
	/// Proof: Preimage PreimageFor (max_values: None, max_size: Some(4194344), added: 4196819, mode: Measured)
	fn execute_preimage() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `209`
		//  Estimated: `7230`
		// Minimum execution time: 14_046_000 picoseconds.
		Weight::from_parts(14_419_000, 7230)
			.saturating_add(RocksDbWeight::get().reads(2_u64))
	}
}

