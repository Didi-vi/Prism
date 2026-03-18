// Replay worker — processes queued replay jobs
import { Worker } from "bullmq";
import { config } from "../config";

const worker = new Worker(
  "replay",
  async (job) => {
    // TODO: Spawn prism binary for replay, stream results
    console.log(`Processing replay job ${job.id}: ${job.data.txHash}`);
  },
  { connection: { url: config.redisUrl } }
);

export default worker;
