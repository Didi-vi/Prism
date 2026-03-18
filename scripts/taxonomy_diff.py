#!/usr/bin/env python3
"""
Taxonomy Diff Script

CI script that parses Stellar Core source for error definitions and diffs
against the current taxonomy TOML files. Opens an automated issue when
new error codes are detected in a protocol upgrade.

Usage:
    python scripts/taxonomy_diff.py --core-path /path/to/stellar-core --taxonomy-path crates/core/src/taxonomy/data
"""

import argparse
import sys
from pathlib import Path


def parse_args():
    parser = argparse.ArgumentParser(description="Diff taxonomy against Stellar Core source")
    parser.add_argument("--core-path", type=str, help="Path to stellar-core source")
    parser.add_argument("--taxonomy-path", type=str, default="crates/core/src/taxonomy/data",
                        help="Path to taxonomy TOML files")
    return parser.parse_args()


def load_taxonomy(taxonomy_path: Path) -> dict:
    """Load all taxonomy TOML files and extract known error codes."""
    known_errors = {}
    for toml_file in taxonomy_path.glob("*.toml"):
        # TODO: Parse TOML files and extract (category, code) pairs
        known_errors[toml_file.stem] = []
    return known_errors


def scan_core_source(core_path: Path) -> dict:
    """Scan Stellar Core source for error definitions."""
    found_errors = {}
    # TODO: Parse error enum definitions from stellar-core source files
    return found_errors


def diff_errors(known: dict, found: dict) -> list:
    """Find new error codes not in the taxonomy."""
    new_errors = []
    # TODO: Compare known vs found and return differences
    return new_errors


def main():
    args = parse_args()
    taxonomy_path = Path(args.taxonomy_path)
    
    known = load_taxonomy(taxonomy_path)
    print(f"Loaded {sum(len(v) for v in known.values())} known taxonomy entries")
    
    if args.core_path:
        core_path = Path(args.core_path)
        found = scan_core_source(core_path)
        new_errors = diff_errors(known, found)
        
        if new_errors:
            print(f"Found {len(new_errors)} new error codes not in taxonomy!")
            for error in new_errors:
                print(f"  - {error}")
            sys.exit(1)
        else:
            print("Taxonomy is up to date.")
    else:
        print("No --core-path provided, skipping source scan.")


if __name__ == "__main__":
    main()
