// Hook for execution trace via backend API
import { useState } from "react";

export function useTrace() {
  const [trace, setTrace] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);

  async function requestTrace(txHash: string, network: string) {
    setLoading(true);
    try {
      // TODO: Call backend replay API
    } finally {
      setLoading(false);
    }
  }

  return { trace, loading, requestTrace };
}
