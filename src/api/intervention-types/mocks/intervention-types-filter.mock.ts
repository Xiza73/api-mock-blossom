import { StatusCodes } from 'http-status-codes';

import { ErrorCode, SuccessCode } from '@/domain/code-mapper.map';
import { Pagination } from '@/domain/pagination.interface';
import { ResponseStatus } from '@/domain/response.interface';
import { paginateArray } from '@/utils/paginate-array.util';
import { serviceResponse } from '@/utils/service-response.util';

import { InterventionType } from '../domain/intervention-type.interface';

interface InterventionTypeListResponse {
  intervention_types: InterventionType[];
  pagination: Pagination;
}

const getInterventionTypesFile = async (): Promise<InterventionType[]> => {
  const data = (await import('./intervention-types-filter.data.json')).default as InterventionType[];

  return data;
};

export const interventionTypesList = async (page: number) => {
  const data = await getInterventionTypesFile();

  return serviceResponse<InterventionTypeListResponse>({
    status: ResponseStatus.Success,
    httpStatusCode: StatusCodes.OK,
    message: 'Success',
    responseCode: SuccessCode.SUCCESS_200,
    responseObject: {
      intervention_types: paginateArray(data, page),
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

export const interventionTypesListParamError = serviceResponse({
  status: ResponseStatus.Failed,
  httpStatusCode: StatusCodes.BAD_REQUEST,
  message: [
    'El término de búsqueda debe ser una cadena de texto',
    'El cargo debe ser uno de los siguientes: agente, supervisor, jefe_de_area, administrador_de_sistema',
  ],
  responseCode: ErrorCode.UNKNOWN_400,
  responseObject: 'Bad request',
});

export const getInterventionTypeById = async (id: string) => {
  const data = await getInterventionTypesFile();
  const interventionType = data.find((interventionType) => interventionType.intervention_type_id.toString() === id);

  return serviceResponse<InterventionType | undefined>({
    status: ResponseStatus.Success,
    httpStatusCode: StatusCodes.OK,
    message: 'Success2',
    responseCode: SuccessCode.SUCCESS_200,
    responseObject: interventionType,
  });
};
