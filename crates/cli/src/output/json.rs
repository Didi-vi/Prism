//! JSON output formatter.

use prism_core::types::report::DiagnosticReport;

/// Print a diagnostic report as JSON.
pub fn print_report(report: &DiagnosticReport) -> anyhow::Result<()> {
    println!("{}", serde_json::to_string_pretty(report)?);
    Ok(())
}
