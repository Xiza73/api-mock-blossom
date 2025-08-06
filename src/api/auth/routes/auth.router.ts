import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { SuccessCode } from '@/domain/code-mapper.map';
import { ResponseStatus } from '@/domain/response.interface';
import { handleServiceResponse } from '@/utils/http-handlers.util';
import { serviceResponse } from '@/utils/service-response.util';
import { sleep } from '@/utils/sleep.util';

import { authController } from '../controllers/auth.controller';

export const authRouter: Router = (() => {
  const router = Router();

  // router.get('/me', authController.verifyLogin);

  router.post('/login', authController.login);

  // router.post('/register', authController.register);

  router.post('/forgot-password', authController.recoveryPassword);

  router.post('/reset-password-email', authController.resetPassword);

  router.post('/logout', async (_req: Request, res: Response) => {
    await sleep(1000);

    handleServiceResponse(
      serviceResponse({
        status: ResponseStatus.Success,
        httpStatusCode: StatusCodes.OK,
        message: 'Sesión cerrada exitosamente',
        responseCode: SuccessCode.SUCCESS_200,
        responseObject: true,
      }),
      res
    );
  });

  return router;
})();
