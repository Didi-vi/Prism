// WASM bridge — loads and initializes prism-core WASM module
export async function initWasm() {
  // TODO: Dynamically import the WASM module built by wasm-pack
}

export async function decodeError(txResultXdr: string): Promise<unknown> {
  // TODO: Call into WASM decode function
  return { status: "not_yet_implemented" };
}
