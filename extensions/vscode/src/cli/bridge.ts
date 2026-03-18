// CLI bridge — shells out to prism binary and parses JSON output
import { execFile } from "child_process";

export function callPrism(args: string[]): Promise<unknown> {
  return new Promise((resolve, reject) => {
    execFile("prism", [...args, "--output", "json"], (error, stdout) => {
      if (error) return reject(error);
      try {
        resolve(JSON.parse(stdout));
      } catch {
        reject(new Error("Failed to parse prism output"));
      }
    });
  });
}
