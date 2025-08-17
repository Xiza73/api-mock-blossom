import { StatusCodes } from 'http-status-codes';

import { ErrorCode, SuccessCode } from '@/domain/code-mapper.map';
import { Pagination } from '@/domain/pagination.interface';
import { ResponseStatus } from '@/domain/response.interface';
import { paginateArray } from '@/utils/paginate-array.util';
import { serviceResponse } from '@/utils/service-response.util';

import { ActivityList } from '../domain/activity-list.interface';

interface ActivityListListResponse {
  activityLists: ActivityList[];
  pagination: Pagination;
}

const getActivityListsFile = async (): Promise<ActivityList[]> => {
  const data = (await import('./activity-lists-filter.data.json')).default as ActivityList[];

  return data;
};

export const activityListsList = async (page: number) => {
  const data = await getActivityListsFile();

  return serviceResponse<ActivityListListResponse>({
    status: ResponseStatus.Success,
    httpStatusCode: StatusCodes.OK,
    message: 'Success',
    responseCode: SuccessCode.SUCCESS_200,
    responseObject: {
      activityLists: paginateArray(data, page),
      pagination: {
        total: 2,
        page: 1,
        limit: 10,
        totalPages: 1,
        hasNext: true,
        hasPrev: false,
      },
    },
  });
};

export const activityListsListParamError = serviceResponse({
  status: ResponseStatus.Failed,
  httpStatusCode: StatusCodes.BAD_REQUEST,
  message: [
    'El término de búsqueda debe ser una cadena de texto',
    'El cargo debe ser uno de los siguientes: agente, supervisor, jefe_de_area, administrador_de_sistema',
  ],
  responseCode: ErrorCode.UNKNOWN_400,
  responseObject: 'Bad request',
});

export const getActivityListById = async (id: string) => {
  const data = await getActivityListsFile();
  const activityList = data.find((activityList) => activityList.activity_list_id.toString() === id);

  return serviceResponse<ActivityList | undefined>({
    status: ResponseStatus.Success,
    httpStatusCode: StatusCodes.OK,
    message: 'Success2',
    responseCode: SuccessCode.SUCCESS_200,
    responseObject: activityList,
  });
};

export const getActivityListByCompanyId = async (companyId: string) => {
  const data = await getActivityListsFile();
  const activityList = data.find((activityList) => activityList.company_id.toString() === companyId);

  return serviceResponse<ActivityList | undefined>({
    status: ResponseStatus.Success,
    httpStatusCode: StatusCodes.OK,
    message: 'Success2',
    responseCode: SuccessCode.SUCCESS_200,
    responseObject: activityList,
  });
};
