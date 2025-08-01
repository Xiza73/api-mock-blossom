import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { ServiceResponse } from '@/domain/response.interface';

export const handleServiceResponse = (serviceResponse: ServiceResponse<any>, response: Response) => {
  return response.status(serviceResponse.statusCode).send(serviceResponse);
};

export const handleControllerError = (error: Error, response: Response) => {
  const errorMessage = error.message || 'Internal server error';

  return response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
    error: errorMessage,
  });
};
