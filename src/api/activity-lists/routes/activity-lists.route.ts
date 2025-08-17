import { Request, Response, Router } from 'express';

import { handleServiceResponse } from '@/utils/http-handlers.util';
import { sleep } from '@/utils/sleep.util';

import {
  activityListsList,
  getActivityListByCompanyId,
  getActivityListById,
} from '../mocks/activity-lists-filter.mock';

export const activityListsRouter: Router = (() => {
  const router = Router();

  router.get('/:id', async (req: Request, res: Response) => {
    await sleep(1000);
    const id = req.params.id;

    handleServiceResponse(await getActivityListById(id), res);
  });

  router.get('/company/:companyId', async (req: Request, res: Response) => {
    await sleep(1000);
    const companyId = req.params.companyId;

    handleServiceResponse(await getActivityListByCompanyId(companyId), res);
  });

  router.post('/', async (req: Request, res: Response) => {
    await sleep(1000);

    // handleServiceResponse(activityListsListParamError, res);
    handleServiceResponse(await getActivityListById('1'), res);
  });

  router.post('/filter', async (req: Request, res: Response) => {
    await sleep(1000);
    const page = req.body.page;

    // handleServiceResponse(activityListsListParamError, res);
    handleServiceResponse(await activityListsList(page || 1), res);
  });

  router.put('/:id', async (req: Request, res: Response) => {
    await sleep(1000);
    const id = req.params.id;

    handleServiceResponse(await getActivityListById(id), res);
  });

  router.delete('/:id', async (req: Request, res: Response) => {
    await sleep(1000);
    const id = req.params.id;

    handleServiceResponse(await getActivityListById(id), res);
  });

  router.post('/:id/duplicate', async (req: Request, res: Response) => {
    await sleep(1000);
    const id = req.params.id;

    handleServiceResponse(await getActivityListById(id), res);
  });

  return router;
})();
