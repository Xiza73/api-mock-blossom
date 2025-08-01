import dotenv from 'dotenv';
import { bool, cleanEnv, host, num, port, str, testOnly } from 'envalid';

dotenv.config();

export const env = cleanEnv(process.env, {
  // Environment Configuration
  NODE_ENV: str({ devDefault: testOnly('test'), choices: ['development', 'production', 'test', 'local'] }),
  API_PORT: port({ devDefault: testOnly(3001) }),
  HOST: host({ devDefault: testOnly('localhost') }),

  // Rate Limit
  COMMON_RATE_LIMIT_WINDOW_MS: num({ devDefault: testOnly(1000) }),
  COMMON_RATE_LIMIT_MAX_REQUESTS: num({ devDefault: testOnly(1000) }),

  ALLOW_ALL_ORIGINS: bool({ devDefault: testOnly(true) }),
  WHITE_LIST_URLS: str({ devDefault: testOnly('http://localhost:3000,http://localhost:3001') }),
});
