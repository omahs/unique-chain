//! Weights for pallet_scheduler
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 2.0.0
//! DATE: 2020-10-27, STEPS: `[50, ]`, REPEAT: 20, LOW RANGE: [], HIGH RANGE: []
//! EXECUTION: Some(Wasm), WASM-EXECUTION: Compiled, CHAIN: Some("dev"), DB CACHE: 128

// Executed Command:
// target/release/substrate
// benchmark
// --chain=dev
// --steps=50
// --repeat=20
// --pallet=pallet_scheduler
// --extrinsic=*
// --execution=wasm
// --wasm-execution=compiled
// --heap-pages=4096
// --output=./frame/scheduler/src/weights.rs
// --template=./.maintain/frame-weight-template.hbs

#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{
	traits::Get,
	weights::{Weight, constants::RocksDbWeight},
};
use sp_std::marker::PhantomData;

/// Weight functions needed for pallet_scheduler.
pub trait WeightInfo {
	fn schedule(s: u32) -> Weight;
	fn cancel(s: u32) -> Weight;
	fn schedule_named(s: u32) -> Weight;
	fn cancel_named(s: u32) -> Weight;
}

/// Weights for pallet_scheduler using the Substrate node and recommended hardware.
pub struct SubstrateWeight<T>(PhantomData<T>);
impl<T: frame_system::Config> WeightInfo for SubstrateWeight<T> {
	fn schedule(s: u32) -> Weight {
		35_029_000_u64
			.saturating_add(77_000_u64.saturating_mul(s as Weight))
			.saturating_add(T::DbWeight::get().reads(1_u64))
			.saturating_add(T::DbWeight::get().writes(1_u64))
	}
	fn cancel(s: u32) -> Weight {
		31_419_000_u64
			.saturating_add(4_015_000_u64.saturating_mul(s as Weight))
			.saturating_add(T::DbWeight::get().reads(1_u64))
			.saturating_add(T::DbWeight::get().writes(2_u64))
	}
	fn schedule_named(s: u32) -> Weight {
		44_752_000_u64
			.saturating_add(123_000_u64.saturating_mul(s as Weight))
			.saturating_add(T::DbWeight::get().reads(2_u64))
			.saturating_add(T::DbWeight::get().writes(2_u64))
	}
	fn cancel_named(s: u32) -> Weight {
		35_712_000_u64
			.saturating_add(4_008_000_u64.saturating_mul(s as Weight))
			.saturating_add(T::DbWeight::get().reads(2_u64))
			.saturating_add(T::DbWeight::get().writes(2_u64))
	}
}

// For backwards compatibility and tests
impl WeightInfo for () {
	fn schedule(s: u32) -> Weight {
		35_029_000_u64
			.saturating_add(77_000_u64.saturating_mul(s as Weight))
			.saturating_add(RocksDbWeight::get().reads(1_u64))
			.saturating_add(RocksDbWeight::get().writes(1_u64))
	}
	fn cancel(s: u32) -> Weight {
		31_419_000_u64
			.saturating_add(4_015_000_u64.saturating_mul(s as Weight))
			.saturating_add(RocksDbWeight::get().reads(1_u64))
			.saturating_add(RocksDbWeight::get().writes(2_u64))
	}
	fn schedule_named(s: u32) -> Weight {
		44_752_000_u64
			.saturating_add(123_000_u64.saturating_mul(s as Weight))
			.saturating_add(RocksDbWeight::get().reads(2_u64))
			.saturating_add(RocksDbWeight::get().writes(2_u64))
	}
	fn cancel_named(s: u32) -> Weight {
		35_712_000_u64
			.saturating_add(4_008_000_u64.saturating_mul(s as Weight))
			.saturating_add(RocksDbWeight::get().reads(2_u64))
			.saturating_add(RocksDbWeight::get().writes(2_u64))
	}
}
