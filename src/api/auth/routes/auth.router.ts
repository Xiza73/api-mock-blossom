import { Router } from 'express';

import { authController } from '../controllers/auth.controller';

export const authRouter: Router = (() => {
  const router = Router();

  // router.get('/me', authController.verifyLogin);

  router.post('/login', authController.login);

  // router.post('/register', authController.register);

  router.post('/forgot-password', authController.recoveryPassword);

  router.post('/reset-password-email', authController.resetPassword);

  // router.post('/logout', authController.logout);

  return router;
})();
