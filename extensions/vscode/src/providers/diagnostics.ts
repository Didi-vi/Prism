// Diagnostics provider — intercepts test output for Soroban errors
import * as vscode from "vscode";

export function registerDiagnostics(context: vscode.ExtensionContext) {
  const diagnostics = vscode.languages.createDiagnosticCollection("prism");
  context.subscriptions.push(diagnostics);
  // TODO: Watch terminal output and parse for Soroban error patterns
}
