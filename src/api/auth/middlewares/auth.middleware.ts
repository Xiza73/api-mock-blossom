import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { ErrorCode } from '@/domain/code-mapper.map';
import { ResponseStatus } from '@/domain/response.interface';
import { handleErrorMessage } from '@/utils/error.util';
import { handleServiceResponse } from '@/utils/http-handlers.util';
import { serviceResponse } from '@/utils/service-response.util';

import { getBearerToken } from '../utils/token.util';

export const authenticate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = getBearerToken(req);

    if (!token) {
      const serviceRes = serviceResponse({
        status: ResponseStatus.Failed,
        httpStatusCode: StatusCodes.UNAUTHORIZED,
        message: 'Token was not provided',
        responseCode: ErrorCode.UNAUTHORIZED_BY_MIDDLEWARE_401,
        responseObject: null,
      });
      handleServiceResponse(serviceRes, res);

      return;
    }

    next();
  } catch (err) {
    const serviceRes = serviceResponse({
      status: ResponseStatus.Failed,
      httpStatusCode: StatusCodes.UNAUTHORIZED,
      message: handleErrorMessage('Invalid token error', err),
      responseCode: ErrorCode.UNKNOWN_400,
      responseObject: null,
    });

    handleServiceResponse(serviceRes, res);
  }
};
