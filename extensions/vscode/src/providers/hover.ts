// Hover provider — shows decoded error on hover
import * as vscode from "vscode";

export function registerHoverProvider(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerHoverProvider("rust", {
      provideHover(document, position) {
        // TODO: Detect Soroban error patterns and show decoded hover tooltip
        return null;
      },
    })
  );
}
