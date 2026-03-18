// Quick fix provider — suggests code fixes for Soroban errors
import * as vscode from "vscode";

export function registerQuickFix(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerCodeActionsProvider("rust", {
      provideCodeActions(document, range, context) {
        // TODO: Suggest fixes like "increase budget allocation"
        return [];
      },
    })
  );
}
