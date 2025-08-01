import { env } from './config/env.config';
import { logger } from './config/logger.config';
import { app } from './config/server.config';

const server = app.listen(env.API_PORT, () => {
  const { NODE_ENV, HOST, API_PORT } = env;
  logger.info(`Server (${NODE_ENV}) running on port http://${HOST}:${API_PORT}`);
});

const onCloseSignal = () => {
  logger.info('sigint received, shutting down');
  server.close(() => {
    logger.info('server closed');
    process.exit();
  });
  setTimeout(() => process.exit(1), 10000).unref(); // Force shutdown after 10s
};

process.on('SIGINT', onCloseSignal);
process.on('SIGTERM', onCloseSignal);
