import { StatusCodes } from 'http-status-codes';

import { ErrorCode, SuccessCode } from '@/domain/code-mapper.map';
import { Pagination } from '@/domain/pagination.interface';
import { ResponseStatus } from '@/domain/response.interface';
import { paginateArray } from '@/utils/paginate-array.util';
import { serviceResponse } from '@/utils/service-response.util';

import { AssetList } from '../domain/asset-list.interface';

interface AssetListListResponse {
  assetLists: AssetList[];
  pagination: Pagination;
}

const getAssetListsFile = async (): Promise<AssetList[]> => {
  const data = (await import('./asset-lists-filter.data.json')).default as AssetList[];

  return data;
};

export const assetListsList = async (page: number) => {
  const data = await getAssetListsFile();

  return serviceResponse<AssetListListResponse>({
    status: ResponseStatus.Success,
    httpStatusCode: StatusCodes.OK,
    message: 'Success',
    responseCode: SuccessCode.SUCCESS_200,
    responseObject: {
      assetLists: paginateArray(data, page),
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

export const assetListsListParamError = serviceResponse({
  status: ResponseStatus.Failed,
  httpStatusCode: StatusCodes.BAD_REQUEST,
  message: [
    'El término de búsqueda debe ser una cadena de texto',
    'El cargo debe ser uno de los siguientes: agente, supervisor, jefe_de_area, administrador_de_sistema',
  ],
  responseCode: ErrorCode.UNKNOWN_400,
  responseObject: 'Bad request',
});

export const getAssetListById = async (id: string) => {
  const data = await getAssetListsFile();
  const assetList = data.find((assetList) => assetList.asset_list_id.toString() === id);

  return serviceResponse<AssetList | undefined>({
    status: ResponseStatus.Success,
    httpStatusCode: StatusCodes.OK,
    message: 'Success2',
    responseCode: SuccessCode.SUCCESS_200,
    responseObject: assetList,
  });
};

export const getAssetListByCompanyId = async (companyId: string) => {
  const data = await getAssetListsFile();
  const assetList = data.find((assetList) => assetList.company_id.toString() === companyId);

  return serviceResponse<AssetList | undefined>({
    status: ResponseStatus.Success,
    httpStatusCode: StatusCodes.OK,
    message: 'Success2',
    responseCode: SuccessCode.SUCCESS_200,
    responseObject: assetList,
  });
};
