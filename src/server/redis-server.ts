import { Redis } from "ioredis";

const r = new Redis(process.env.REDIS_URL as string);
export default r;