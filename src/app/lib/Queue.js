import Queue from "bull";
import redisCondig from "../../config/redis.js";
import * as jobs from "../jobs/index.js";

const queues = Object.values(jobs).map((job) => ({
  bull: new Queue(job.key, redisCondig),
  name: job.key,
  handle: job.handle,
  options: job.options,
}));

export default {
  queues,
  add(name, data) {
    const queue = this.queues.find((queue) => queue.name === name);
    return queue.bull.add(data, queue.options);
  },
  process() {
    return this.queues.forEach((queue) => {
      queue.bull.process(queue.handle);

      queue.bull.on("failed", (job, err) => {
        console.group("Job failed");
        console.error("Job", queue.key, job.data);
        console.error(err);
        console.groupEnd();
      });
    });
  },
};
