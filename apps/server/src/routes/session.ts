// Session management routes (shareable debug sessions)
import type { FastifyInstance } from "fastify";

export async function sessionRoutes(app: FastifyInstance) {
  app.get("/session/:sessionId", async (request, reply) => {
    // TODO: Retrieve a shareable debug session
    return { status: "not_found" };
  });
}
