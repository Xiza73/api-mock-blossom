import { StatusCodes } from 'http-status-codes';

import { ResponseCode } from './code-mapper.map';

export enum ResponseStatus {
  Success,
  Failed,
}

export interface ServiceResponseProps<T = null> {
  status: ResponseStatus;
  httpStatusCode: StatusCodes;
  message: string;
  responseCode: ResponseCode;
  responseObject: T;
}

export interface ServiceResponse<T = null> {
  statusCode: StatusCodes;
  data: T;
  message: string;
  error?: string;
}
