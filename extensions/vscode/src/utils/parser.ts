// Terminal output parser — detects Soroban error patterns
export function parseSorobanError(line: string): { category: string; code: number } | null {
  // TODO: Match patterns like "HostError(Budget, LimitExceeded)" and "ContractError(3)"
  return null;
}
