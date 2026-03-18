// WebSocket hook for streaming trace data during replay
import { useEffect, useRef, useState } from "react";

export function useWebSocket(url: string) {
  const wsRef = useRef<WebSocket | null>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    // TODO: Connect to WebSocket and handle trace stream events
    return () => wsRef.current?.close();
  }, [url]);

  return { connected };
}
