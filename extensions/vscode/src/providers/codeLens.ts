// Code lens provider — "Debug This TX" clickable lens on TX hashes
import * as vscode from "vscode";

export function registerCodeLens(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerCodeLensProvider("rust", {
      provideCodeLenses(document) {
        // TODO: Find TX hashes in the document and show code lenses
        return [];
      },
    })
  );
}
