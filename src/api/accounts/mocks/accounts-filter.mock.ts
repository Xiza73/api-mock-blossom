import { StatusCodes } from 'http-status-codes';

import { ErrorCode, SuccessCode } from '@/domain/code-mapper.map';
import { Pagination } from '@/domain/pagination.interface';
import { ResponseStatus } from '@/domain/response.interface';
import { paginateArray } from '@/utils/paginate-array.util';
import { serviceResponse } from '@/utils/service-response.util';

import { Account } from '../domain/account.interface';

interface AccountsListResponse {
  accounts: Account[];
  pagination: Pagination;
}

const getAccountsFile = async (): Promise<Account[]> => {
  const data = (await import('./accounts-filter-data.json')).default as Account[];

  return data;
};

export const accountsList = async (page: number) => {
  const data = await getAccountsFile();

  return serviceResponse<AccountsListResponse>({
    status: ResponseStatus.Success,
    httpStatusCode: StatusCodes.OK,
    message: 'Success',
    responseCode: SuccessCode.SUCCESS_200,
    responseObject: {
      accounts: paginateArray(data, page),
      pagination: {
        total: 12,
        page: 1,
        limit: 10,
        totalPages: 2,
        hasNext: true,
        hasPrev: false,
      },
    },
  });
};

export const accountListParamError = serviceResponse({
  status: ResponseStatus.Failed,
  httpStatusCode: StatusCodes.BAD_REQUEST,
  message: [
    'El término de búsqueda debe ser una cadena de texto',
    'El cargo debe ser uno de los siguientes: agente, supervisor, jefe_de_area, administrador_de_sistema',
  ],
  responseCode: ErrorCode.UNKNOWN_400,
  responseObject: 'Bad request',
});

export const getAccountById = async (id: string) => {
  const data = await getAccountsFile();
  const account = data.find((account) => account.account_id.toString() === id);

  return serviceResponse<Account | undefined>({
    status: ResponseStatus.Success,
    httpStatusCode: StatusCodes.OK,
    message: 'Success2',
    responseCode: SuccessCode.SUCCESS_200,
    responseObject: account,
  });
};
