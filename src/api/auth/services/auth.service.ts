import { ErrorCode, SuccessCode } from '@/domain/code-mapper.map';

import { authMock } from '../mocks/auth.mock';

export const authService = {
  verifyLogin: () => {
    const CODES = {
      SUCCESS: SuccessCode.SUCCESS_200,
      ERROR: ErrorCode.UNKNOWN_500,
    };

    const code = CODES.SUCCESS;

    return authMock.verifyLogin(code);
  },

  login: () => {
    const CODES = {
      SUCCESS: SuccessCode.SUCCESS_200,
      ERROR: ErrorCode.UNKNOWN_500,
      INVALID_CREDENTIALS: ErrorCode.INVALID_CREDENTIALS_401,
    };

    const code = CODES.SUCCESS;

    return authMock.login(code);
  },

  recoveryPassword: () => {
    const CODES = {
      SUCCESS: SuccessCode.SUCCESS_200,
      ERROR: ErrorCode.UNKNOWN_500,
    };

    const code = CODES.SUCCESS;

    return authMock.recoveryPassword(code);
  },

  resetPassword: () => {
    const CODES = {
      SUCCESS: SuccessCode.SUCCESS_200,
      ERROR: ErrorCode.UNKNOWN_500,
      PASSWORD_MISMATCH: ErrorCode.RESET_PASSWORD_PASSWORD_MISMATCH_400,
      TOKEN_EXPIRED: ErrorCode.RESET_PASSWORD_TOKEN_EXPIRED_400,
    };

    const code = CODES.SUCCESS;

    return authMock.resetPassword(code);
  },
};
