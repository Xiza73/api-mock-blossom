import { ServiceResponse } from '@/domain/response.interface';

export const messageResponse = (message: string, statusCode: number, error?: string): ServiceResponse<null> => {
  return {
    statusCode,
    message,
    data: null,
    error,
  };
};
