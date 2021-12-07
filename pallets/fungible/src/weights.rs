// Template adopted from https://github.com/paritytech/substrate/blob/master/.maintain/frame-weight-template.hbs

//! Autogenerated weights for pallet_fungible
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2021-10-21, STEPS: `50`, REPEAT: 20, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! EXECUTION: None, WASM-EXECUTION: Compiled, CHAIN: None, DB CACHE: 128

// Executed Command:
// target/release/unique-collator
// benchmark
// --pallet
// pallet-fungible
// --wasm-execution
// compiled
// --extrinsic
// *
// --template
// .maintain/frame-weight-template.hbs
// --steps=50
// --repeat=20
// --output=./pallets/fungible/src/weights.rs


#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]
#![allow(clippy::unnecessary_cast)]

use frame_support::{traits::Get, weights::{Weight, constants::RocksDbWeight}};
use sp_std::marker::PhantomData;

/// Weight functions needed for pallet_fungible.
pub trait WeightInfo {
	fn create_item() -> Weight;
	fn burn_item() -> Weight;
	fn transfer() -> Weight;
	fn approve() -> Weight;
	fn transfer_from() -> Weight;
	fn burn_from() -> Weight;
}

/// Weights for pallet_fungible using the Substrate node and recommended hardware.
pub struct SubstrateWeight<T>(PhantomData<T>);
impl<T: frame_system::Config> WeightInfo for SubstrateWeight<T> {
	// Storage: Fungible Balance (r:1 w:1)
	// Storage: Fungible TotalSupply (r:0 w:1)
	fn create_item() -> Weight {
		(12_069_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(1 as Weight))
			.saturating_add(T::DbWeight::get().writes(2 as Weight))
	}
	// Storage: Fungible TotalSupply (r:1 w:1)
	// Storage: Fungible Balance (r:1 w:1)
	fn burn_item() -> Weight {
		(14_096_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(2 as Weight))
			.saturating_add(T::DbWeight::get().writes(2 as Weight))
	}
	// Storage: Fungible Balance (r:2 w:2)
	fn transfer() -> Weight {
		(15_436_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(2 as Weight))
			.saturating_add(T::DbWeight::get().writes(2 as Weight))
	}
	// Storage: Fungible Balance (r:1 w:0)
	// Storage: Fungible Allowance (r:0 w:1)
	fn approve() -> Weight {
		(12_867_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(1 as Weight))
			.saturating_add(T::DbWeight::get().writes(1 as Weight))
	}
	// Storage: Fungible Allowance (r:1 w:1)
	// Storage: Fungible Balance (r:2 w:2)
	fn transfer_from() -> Weight {
		(21_462_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(3 as Weight))
			.saturating_add(T::DbWeight::get().writes(3 as Weight))
	}
	// Storage: Fungible Allowance (r:1 w:1)
	// Storage: Fungible TotalSupply (r:1 w:1)
	// Storage: Fungible Balance (r:1 w:1)
	fn burn_from() -> Weight {
		(55_874_000 as Weight)
			.saturating_add(T::DbWeight::get().reads(3 as Weight))
			.saturating_add(T::DbWeight::get().writes(3 as Weight))
	}
}

// For backwards compatibility and tests
impl WeightInfo for () {
	// Storage: Fungible Balance (r:1 w:1)
	// Storage: Fungible TotalSupply (r:0 w:1)
	fn create_item() -> Weight {
		(12_069_000 as Weight)
			.saturating_add(RocksDbWeight::get().reads(1 as Weight))
			.saturating_add(RocksDbWeight::get().writes(2 as Weight))
	}
	// Storage: Fungible TotalSupply (r:1 w:1)
	// Storage: Fungible Balance (r:1 w:1)
	fn burn_item() -> Weight {
		(14_096_000 as Weight)
			.saturating_add(RocksDbWeight::get().reads(2 as Weight))
			.saturating_add(RocksDbWeight::get().writes(2 as Weight))
	}
	// Storage: Fungible Balance (r:2 w:2)
	fn transfer() -> Weight {
		(15_436_000 as Weight)
			.saturating_add(RocksDbWeight::get().reads(2 as Weight))
			.saturating_add(RocksDbWeight::get().writes(2 as Weight))
	}
	// Storage: Fungible Balance (r:1 w:0)
	// Storage: Fungible Allowance (r:0 w:1)
	fn approve() -> Weight {
		(12_867_000 as Weight)
			.saturating_add(RocksDbWeight::get().reads(1 as Weight))
			.saturating_add(RocksDbWeight::get().writes(1 as Weight))
	}
	// Storage: Fungible Allowance (r:1 w:1)
	// Storage: Fungible Balance (r:2 w:2)
	fn transfer_from() -> Weight {
		(21_462_000 as Weight)
			.saturating_add(RocksDbWeight::get().reads(3 as Weight))
			.saturating_add(RocksDbWeight::get().writes(3 as Weight))
	}
	// Storage: Fungible Allowance (r:1 w:1)
	// Storage: Fungible TotalSupply (r:1 w:1)
	// Storage: Fungible Balance (r:1 w:1)
	fn burn_from() -> Weight {
		(55_874_000 as Weight)
			.saturating_add(RocksDbWeight::get().reads(3 as Weight))
			.saturating_add(RocksDbWeight::get().writes(3 as Weight))
	}
}
