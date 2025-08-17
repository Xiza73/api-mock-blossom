import { StatusCodes } from 'http-status-codes';

import { ErrorCode, SuccessCode } from '@/domain/code-mapper.map';
import { Pagination } from '@/domain/pagination.interface';
import { ResponseStatus } from '@/domain/response.interface';
import { paginateArray } from '@/utils/paginate-array.util';
import { serviceResponse } from '@/utils/service-response.util';

import { IncidentType } from '../domain/incident-type.interface';

interface IncidentTypeListResponse {
  incidentTypes: IncidentType[];
  pagination: Pagination;
}

const getIncidentTypesFile = async (): Promise<IncidentType[]> => {
  const data = (await import('./incident-types-filter.data.json')).default as IncidentType[];

  return data;
};

export const incidentTypesList = async (page: number) => {
  const data = await getIncidentTypesFile();

  return serviceResponse<IncidentTypeListResponse>({
    status: ResponseStatus.Success,
    httpStatusCode: StatusCodes.OK,
    message: 'Success',
    responseCode: SuccessCode.SUCCESS_200,
    responseObject: {
      incidentTypes: paginateArray(data, page),
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

export const incidentTypesListParamError = serviceResponse({
  status: ResponseStatus.Failed,
  httpStatusCode: StatusCodes.BAD_REQUEST,
  message: [
    'El término de búsqueda debe ser una cadena de texto',
    'El cargo debe ser uno de los siguientes: agente, supervisor, jefe_de_area, administrador_de_sistema',
  ],
  responseCode: ErrorCode.UNKNOWN_400,
  responseObject: 'Bad request',
});

export const getIncidentTypeById = async (id: string) => {
  const data = await getIncidentTypesFile();
  const incidentType = data.find((incidentType) => incidentType.incident_type_id.toString() === id);

  return serviceResponse<IncidentType | undefined>({
    status: ResponseStatus.Success,
    httpStatusCode: StatusCodes.OK,
    message: 'Success2',
    responseCode: SuccessCode.SUCCESS_200,
    responseObject: incidentType,
  });
};
