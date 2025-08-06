import { StatusCodes } from 'http-status-codes';

import { User } from '@/api/auth/domain/user.interface';
import { ErrorCode, SuccessCode } from '@/domain/code-mapper.map';
import { ResponseStatus } from '@/domain/response.interface';
import { paginateArray } from '@/utils/paginate-array.util';
import { serviceResponse } from '@/utils/service-response.util';

interface UserListResponse {
  users: User[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

const getUsersFile = async (): Promise<User[]> => {
  const data = (await import('./users-filter-data.json')).default as User[];

  return data;
};

export const usersList = async (page: number) => {
  const data = await getUsersFile();

  return serviceResponse<UserListResponse>({
    status: ResponseStatus.Success,
    httpStatusCode: StatusCodes.OK,
    message: 'Success',
    responseCode: SuccessCode.SUCCESS_200,
    responseObject: {
      users: paginateArray(data, page),
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

export const userListParamError = serviceResponse({
  status: ResponseStatus.Failed,
  httpStatusCode: StatusCodes.BAD_REQUEST,
  message: [
    'El término de búsqueda debe ser una cadena de texto',
    'El cargo debe ser uno de los siguientes: agente, supervisor, jefe_de_area, administrador_de_sistema',
  ],
  responseCode: ErrorCode.UNKNOWN_400,
  responseObject: 'Bad request',
});

export const getUserById = async (id: string) => {
  const data = await getUsersFile();
  const user = data.find((user) => user.user_id.toString() === id);

  return serviceResponse<User | undefined>({
    status: ResponseStatus.Success,
    httpStatusCode: StatusCodes.OK,
    message: 'Success2',
    responseCode: SuccessCode.SUCCESS_200,
    responseObject: user,
  });
};
