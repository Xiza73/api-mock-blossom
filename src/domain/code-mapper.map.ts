export const ErrorCode = {
  // Common
  UNKNOWN_400: 'UNKN400',
  UNKNOWN_500: 'UNKN500',
  // Auth
  UNAUTHORIZED_BY_MIDDLEWARE_401: 'UTBM_401',
  UNAUTHORIZED_BY_MIDDLEWARE_TOKEN_401: 'UTBT_401',
  USER_ALREADY_EXISTS_400: 'USAE_400',
  USER_NOT_FOUND_404: 'USNF_404',
  // Auth - Login
  INVALID_CREDENTIALS_401: 'IC_401',
  // Auth - Reset Password
  RESET_PASSWORD_PASSWORD_MISMATCH_400: 'RPPWM_400',
  RESET_PASSWORD_TOKEN_EXPIRED_400: 'RPTE_400',
} as const;
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

export const SuccessCode = {
  // Common
  SUCCESS_200: 'SCSS200',
  SUCCESS_201: 'SCSS201',
  SUCCESS_202: 'SCSS202',
} as const;
export type SuccessCode = (typeof SuccessCode)[keyof typeof SuccessCode];

export const ResponseCode = {
  ...ErrorCode,
  ...SuccessCode,
} as const;
export type ResponseCode = (typeof ResponseCode)[keyof typeof ResponseCode];
