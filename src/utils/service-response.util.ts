import { ResponseStatus, ServiceResponse, ServiceResponseProps } from '@/domain/response.interface';

export const serviceResponse = <T = null>({
  status,
  httpStatusCode,
  message,
  responseObject,
}: ServiceResponseProps<T>): ServiceResponse<T> => {
  return {
    statusCode: httpStatusCode,
    data: responseObject,
    message,
    error: status === ResponseStatus.Failed ? message : undefined,
  };
};
