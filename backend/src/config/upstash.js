import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

// dotenv package needed else upstash will not be able to find .env variables
dotenv.config({ quiet: true });

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(100, "60 s"), // 100 req in 60 sec
});

export default ratelimit;
