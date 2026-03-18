# WASM Build Script for Prism
# Compiles prism-core to WebAssembly via wasm-pack

$ErrorActionPreference = "Stop"

Write-Host "Building prism-wasm..." -ForegroundColor Cyan

# Check for wasm-pack
if (-not (Get-Command wasm-pack -ErrorAction SilentlyContinue)) {
    Write-Host "wasm-pack not found. Install via: cargo install wasm-pack" -ForegroundColor Red
    exit 1
}

# Build WASM package
Set-Location "$PSScriptRoot\..\crates\wasm"
wasm-pack build --target web --out-dir pkg

Write-Host "WASM build complete! Output in crates/wasm/pkg/" -ForegroundColor Green
