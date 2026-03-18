// BullMQ job queue for replay requests
import { Queue } from "bullmq";
import { config } from "../config";

export const replayQueue = new Queue("replay", {
  connection: { url: config.redisUrl },
});
