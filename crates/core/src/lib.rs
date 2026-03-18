//! # Prism Core
//!
//! Core library for the Prism Soroban Transaction Debugger.
//!
//! This crate provides:
//! - **Decode Engine** (Tier 1): Error decoding, contract error resolution, and transaction context enrichment
//! - **Replay Engine** (Tier 2): Historical state reconstruction and execution replay
//! - **Debugger** (Tier 3): Interactive stepping, breakpoints, and what-if analysis
//!
//! ## Feature Flags
//! - `decode` (default): Enable Tier 1 decode engine
//! - `taxonomy` (default): Include the error taxonomy database
//! - `replay`: Enable Tier 2 replay engine
//! - `debugger`: Enable Tier 3 interactive debugger (implies `replay`)
//! - `wasm-compat`: Build for WASM target (disables features requiring native I/O)

pub mod types;
pub mod xdr;
pub mod spec;
pub mod network;
pub mod cache;
pub mod taxonomy;
pub mod decode;
pub mod replay;
pub mod debugger;

// Re-export key types for convenience
pub use types::error::PrismError;
pub use types::report::DiagnosticReport;
pub use types::config::NetworkConfig;

/// Library version
pub const VERSION: &str = env!("CARGO_PKG_VERSION");
