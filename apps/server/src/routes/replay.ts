// Replay API routes
import type { FastifyInstance } from "fastify";

export async function replayRoutes(app: FastifyInstance) {
  app.post("/replay", async (request, reply) => {
    // TODO: Queue replay job via BullMQ
    return { status: "queued" };
  });

  app.get("/replay/:jobId", async (request, reply) => {
    // TODO: Get replay job status/result
    return { status: "pending" };
  });
}
