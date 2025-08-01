import { Request, Response } from 'express';

import { handleControllerError, handleServiceResponse } from '@/utils/http-handlers.util';
import { sleep } from '@/utils/sleep.util';

import { authService } from '../services/auth.service';

export const authController = {
  verifyLogin: async (req: Request, res: Response) => {
    try {
      const serviceResponse = authService.verifyLogin();

      await sleep(1000);

      handleServiceResponse(serviceResponse, res);
    } catch (error) {
      handleControllerError(error, res);
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const serviceResponse = authService.login();

      await sleep(1000);

      handleServiceResponse(serviceResponse, res);
    } catch (error) {
      handleControllerError(error, res);
    }
  },

  recoveryPassword: async (req: Request, res: Response) => {
    try {
      const serviceResponse = authService.recoveryPassword();

      await sleep(1000);

      handleServiceResponse(serviceResponse, res);
    } catch (error) {
      handleControllerError(error, res);
    }
  },

  resetPassword: async (req: Request, res: Response) => {
    try {
      const serviceResponse = authService.resetPassword();

      await sleep(1000);

      handleServiceResponse(serviceResponse, res);
    } catch (error) {
      handleControllerError(error, res);
    }
  },
};
