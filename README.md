# 🔬 Prism

**From cryptic error to root cause in one command.**

Prism is a Soroban Transaction Debugger that unifies error decoding, transaction replay, and interactive debugging into a single layered tool. It refracts a single opaque error into its full spectrum of causes, context, and fixes.

## Features

- **Tier 1 — Decode:** Instant, human-readable error translation with root cause suggestions
- **Tier 2 — Trace:** Full execution replay with a structured timeline of every host function call
- **Tier 3 — Time-Travel:** Interactive stepping, input modification, and state diffing *(post-1.0)*

## Quick Start

```bash
# Decode a failed transaction
prism decode <tx-hash>

# Inspect full transaction context
prism inspect <tx-hash>

# Replay and trace execution
prism trace <tx-hash>

# Resource profiling with hotspot analysis
prism profile <tx-hash>
```

## Architecture

```
┌──────────────────────────────────────────────┐
│                 Interfaces                    │
│   CLI (Rust)  │  VS Code Extension  │  Web   │
├──────────────────────────────────────────────┤
│              prism-core (Rust)                │
│   Decode Engine  │  Replay Engine             │
├──────────────────────────────────────────────┤
│           Shared Infrastructure               │
│  XDR │ ContractSpec │ RPC │ Archive │ Cache   │
└──────────────────────────────────────────────┘
```

## Project Structure

```
prism/
├── crates/
│   ├── core/       # prism-core library (Rust)
│   ├── cli/        # CLI binary (Rust)
│   └── wasm/       # WASM compilation target
├── apps/
│   ├── web/        # Next.js web application
│   └── server/     # Backend replay server
├── extensions/
│   └── vscode/     # VS Code extension
├── scripts/        # CI/build tooling
├── docs/           # Architecture & contributor docs
└── tests/          # Integration tests & fixtures
```

## Delivery Surfaces

| Surface | Use Case |
|---------|----------|
| **CLI** | Power users, CI pipelines, scripted analysis |
| **VS Code** | Active coding, inline error decoding |
| **Web** | Collaboration, sharing debug sessions |

## Development

```bash
# Rust
cargo check --workspace
cargo test --workspace
cargo run -p prism -- decode <tx-hash>

# Web
pnpm install
pnpm dev:web

# VS Code Extension
pnpm build:vscode
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines. The error taxonomy database is community-contributable — see [docs/contributing-taxonomy.md](docs/contributing-taxonomy.md).

## License

Apache-2.0
