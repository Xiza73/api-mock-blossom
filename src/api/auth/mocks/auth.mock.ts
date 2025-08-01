import { StatusCodes } from 'http-status-codes';

import { ErrorCode, ResponseCode, SuccessCode } from '@/domain/code-mapper.map';
import { ResponseStatus } from '@/domain/response.interface';
import { serviceResponse } from '@/utils/service-response.util';

import { User } from '../domain/user.interface';

export const authMock = {
  verifyLogin: (code: ResponseCode) => {
    const response = {
      [SuccessCode.SUCCESS_200]: serviceResponse<User>({
        status: ResponseStatus.Success,
        httpStatusCode: StatusCodes.OK,
        message: 'Success',
        responseCode: SuccessCode.SUCCESS_200,
        responseObject: {
          user_id: 1,
          first_name: 'John',
          last_name: 'Doe',
          document_number: '123456789',
          position: 'Developer',
          supervisor: 1,
          phone_number: '123456789',
          email: 'john.doe@example.com',
          password: '',
          birthday: '1990-01-01',
          address: '123 Main St',
          residential_address: '123 Main St',
          token: 'example-token',
        },
      }),
      [ErrorCode.UNKNOWN_500]: serviceResponse({
        status: ResponseStatus.Failed,
        httpStatusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        message: 'Failed',
        responseCode: ErrorCode.UNKNOWN_500,
        responseObject: {
          error: 'Failed',
        },
      }),
    };

    return response[code] || response[SuccessCode.SUCCESS_200];
  },

  login: (code: ResponseCode) => {
    const response = {
      [SuccessCode.SUCCESS_200]: serviceResponse<User>({
        status: ResponseStatus.Success,
        httpStatusCode: StatusCodes.OK,
        message: 'Success',
        responseCode: SuccessCode.SUCCESS_200,
        responseObject: {
          user_id: 1,
          first_name: 'John',
          last_name: 'Doe',
          document_number: '123456789',
          position: 'Developer',
          supervisor: 1,
          phone_number: '123456789',
          email: 'john.doe@example.com',
          password: '',
          birthday: '1990-01-01',
          address: '123 Main St',
          residential_address: '123 Main St',
          token: 'example-token',
        },
      }),
      [ErrorCode.UNKNOWN_500]: serviceResponse({
        status: ResponseStatus.Failed,
        httpStatusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        message: 'Unexpected error',
        responseCode: ErrorCode.UNKNOWN_500,
        responseObject: {
          error: 'Failed',
        },
      }),
      [ErrorCode.INVALID_CREDENTIALS_401]: serviceResponse({
        status: ResponseStatus.Failed,
        httpStatusCode: StatusCodes.UNAUTHORIZED,
        message: 'El correo electrónico y la contraseña son incorrectos, inténtelo nuevamente.',
        responseCode: ErrorCode.INVALID_CREDENTIALS_401,
        responseObject: {
          error: 'Invalid credentials',
        },
      }),
    };

    return response[code] || response[SuccessCode.SUCCESS_200];
  },

  recoveryPassword: (code: ResponseCode) => {
    const response = {
      [SuccessCode.SUCCESS_200]: serviceResponse({
        status: ResponseStatus.Success,
        httpStatusCode: StatusCodes.OK,
        message: 'Password recovery email sent successfully',
        responseCode: SuccessCode.SUCCESS_200,
        responseObject: {
          message: 'data: Password recovery email sent successfully',
        },
      }),
      [ErrorCode.UNKNOWN_500]: serviceResponse({
        status: ResponseStatus.Failed,
        httpStatusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        message: 'El correo electrónico ingresado no existe',
        responseCode: ErrorCode.UNKNOWN_500,
        responseObject: {
          error: 'Failed',
        },
      }),
    };

    return response[code] || response[SuccessCode.SUCCESS_200];
  },

  resetPassword: (code: ResponseCode) => {
    const response = {
      [SuccessCode.SUCCESS_200]: serviceResponse({
        status: ResponseStatus.Success,
        httpStatusCode: StatusCodes.OK,
        message: 'Password reset successfully',
        responseCode: SuccessCode.SUCCESS_200,
        responseObject: {
          message: 'data: Password reset successfully',
        },
      }),
      [ErrorCode.UNKNOWN_500]: serviceResponse({
        status: ResponseStatus.Failed,
        httpStatusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        message: 'Unexpected error',
        responseCode: ErrorCode.UNKNOWN_500,
        responseObject: {
          error: 'Failed',
        },
      }),
      [ErrorCode.RESET_PASSWORD_TOKEN_EXPIRED_400]: serviceResponse({
        status: ResponseStatus.Failed,
        httpStatusCode: StatusCodes.UNAUTHORIZED,
        message: 'Token expired',
        responseCode: ErrorCode.INVALID_CREDENTIALS_401,
        responseObject: {
          error: 'Invalid credentials',
        },
      }),
    };

    return response[code] || response[SuccessCode.SUCCESS_200];
  },
};
