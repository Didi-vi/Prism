// WebSocket server for streaming trace data during replay
import { WebSocketServer } from "ws";

export function createTraceStream(port: number) {
  const wss = new WebSocketServer({ port });

  wss.on("connection", (ws) => {
    ws.on("message", (data) => {
      // TODO: Handle trace stream subscription messages
    });
  });

  return wss;
}
