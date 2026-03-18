# Contributing to Prism

Thank you for your interest in contributing to Prism! This document outlines how to get started.

## Development Setup

### Prerequisites

- **Rust** (stable, via `rustup`)
- **Node.js** ≥ 20
- **pnpm** ≥ 9
- **wasm-pack** (for WASM builds)

### Building

```bash
# Clone the repository
git clone https://github.com/prism-soroban/prism.git
cd prism

# Build Rust crates
cargo build --workspace

# Install JS dependencies
pnpm install

# Build web app
pnpm build:web
```

### Testing

```bash
# Run all Rust tests
cargo test --workspace

# Run with specific test
cargo test -p prism-core -- test_name
```

## Contributing to the Error Taxonomy

The error taxonomy database is the easiest way to contribute. See [docs/contributing-taxonomy.md](docs/contributing-taxonomy.md) for the full guide.

**TL;DR:**
1. Find the TOML file for the error category in `crates/core/src/taxonomy/data/`
2. Add or improve an entry
3. Submit a PR

No Rust knowledge required — it's just TOML.

## Code Style

- **Rust:** Run `cargo fmt` and `cargo clippy` before submitting
- **TypeScript:** Run `pnpm lint` before submitting
- All PRs require tests for new functionality

## Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Make your changes with tests
4. Run all checks (`cargo test`, `cargo clippy`, `pnpm lint`)
5. Submit a PR with a clear description

## Code of Conduct

Be kind, be respectful, help each other learn.
