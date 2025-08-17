import { Request, Response, Router } from 'express';

import { handleServiceResponse } from '@/utils/http-handlers.util';
import { sleep } from '@/utils/sleep.util';

import { assetListsList, getAssetListByCompanyId, getAssetListById } from '../mocks/asset-lists-filter.mock';

export const assetListsRouter: Router = (() => {
  const router = Router();

  router.get('/:id', async (req: Request, res: Response) => {
    await sleep(1000);
    const id = req.params.id;

    handleServiceResponse(await getAssetListById(id), res);
  });

  router.get('/company/:companyId', async (req: Request, res: Response) => {
    await sleep(1000);
    const companyId = req.params.companyId;

    handleServiceResponse(await getAssetListByCompanyId(companyId), res);
  });

  router.post('/', async (req: Request, res: Response) => {
    await sleep(1000);

    // handleServiceResponse(assetListsListParamError, res);
    handleServiceResponse(await getAssetListById('1'), res);
  });

  router.post('/filter', async (req: Request, res: Response) => {
    await sleep(1000);
    const page = req.body.page;

    // handleServiceResponse(assetListsListParamError, res);
    handleServiceResponse(await assetListsList(page || 1), res);
  });

  router.put('/:id', async (req: Request, res: Response) => {
    await sleep(1000);
    const id = req.params.id;

    handleServiceResponse(await getAssetListById(id), res);
  });

  router.delete('/:id', async (req: Request, res: Response) => {
    await sleep(1000);
    const id = req.params.id;

    handleServiceResponse(await getAssetListById(id), res);
  });

  router.post('/:id/duplicate', async (req: Request, res: Response) => {
    await sleep(1000);
    const id = req.params.id;

    handleServiceResponse(await getAssetListById(id), res);
  });

  return router;
})();
