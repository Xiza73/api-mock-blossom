import { StatusCodes } from 'http-status-codes';

import { ErrorCode, SuccessCode } from '@/domain/code-mapper.map';
import { ResponseStatus } from '@/domain/response.interface';
import { serviceResponse } from '@/utils/service-response.util';

import { Unit } from '../domain/unit.interface';

const getUnitsFile = async (): Promise<Unit[]> => {
  const data = (await import('./units-filter-data.json')).default as Unit[];

  return data;
};

export const unitsList = async (account_id?: string) => {
  const data = await getUnitsFile();

  const filteredData = account_id ? data.filter((unit) => unit.account_id.toString() === account_id) : data;

  return serviceResponse<Unit[]>({
    status: ResponseStatus.Success,
    httpStatusCode: StatusCodes.OK,
    message: 'Successfully fetched units list',
    responseCode: SuccessCode.SUCCESS_200,
    responseObject: filteredData,
  });
};

export const unitsListParamError = serviceResponse({
  status: ResponseStatus.Failed,
  httpStatusCode: StatusCodes.BAD_REQUEST,
  message: ['Invalid parameters'],
  responseCode: ErrorCode.UNKNOWN_400,
  responseObject: 'Invalid parameters',
});

export const getUnitsById = async (id: string) => {
  const data = await getUnitsFile();

  const filteredData = data.filter((unit) => unit.unit_id.toString() === id);

  return serviceResponse<Unit>({
    status: ResponseStatus.Success,
    httpStatusCode: StatusCodes.OK,
    message: 'Successfully fetched unit by id',
    responseCode: SuccessCode.SUCCESS_200,
    responseObject: filteredData[0],
  });
};
