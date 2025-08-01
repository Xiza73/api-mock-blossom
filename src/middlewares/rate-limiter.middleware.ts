import { Request, Response } from 'express';
import { ipKeyGenerator, MemoryStore, rateLimit } from 'express-rate-limit';

import { env } from '@/config/env.config';

const customKeyGenerator = (req: Request, _res: Response) => {
  return ipKeyGenerator(req.ip || '0/0.0.0.0');
};

export const rateLimiterMiddleware = rateLimit({
  legacyHeaders: true,
  limit: env.COMMON_RATE_LIMIT_MAX_REQUESTS,
  message: 'Too many requests, please try again later.',
  keyGenerator: customKeyGenerator,
  // how long to keep records of requests in memory
  // in milliseconds
  store: new MemoryStore(),
  standardHeaders: true,
  windowMs: 1000 * env.COMMON_RATE_LIMIT_WINDOW_MS,
});
