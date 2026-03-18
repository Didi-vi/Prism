# Replay Engine Internals

## Overview

The replay engine reconstructs historical ledger state and re-executes transactions in an instrumented sandbox to produce execution traces.

## Two-Path State Reconstruction

- **Hot path (recent, < 50k ledgers):** Uses Soroban RPC `getLedgerEntries`
- **Cold path (older):** Uses Stellar History Archives + Captive Core

## Trace Granularity

Traces capture at the **host function boundary** — not at Rust source lines. This is because production WASM blobs have DWARF debug symbols stripped.

Granularity: `contract invocation → host function call → nested invocation`

## Key Components

1. **State Reconstructor** — Fetches ledger entries for replay
2. **Execution Sandbox** — Modified soroban-env-host with trace hooks
3. **Trace Collector** — Builds hierarchical execution tree
4. **State Differ** — Compares pre/post execution state
5. **Resource Profiler** — Identifies CPU/memory hotspots
