import { Request, Response, Router } from 'express';

import { handleServiceResponse } from '@/utils/http-handlers.util';
import { sleep } from '@/utils/sleep.util';

import { getUnitsById, unitsList } from '../mocks/units-filter.mock';

export const unitsRouter: Router = (() => {
  const router = Router();

  router.get('/by-account/:id', async (req: Request, res: Response) => {
    await sleep(1000);
    const id = req.params.id;

    handleServiceResponse(await unitsList(id), res);
  });

  router.get('/by-company/:id', async (req: Request, res: Response) => {
    await sleep(1000);

    handleServiceResponse(await unitsList(), res);
  });

  router.post('/', async (req: Request, res: Response) => {
    await sleep(1000);

    // handleServiceResponse(unitsListParamError, res);
    handleServiceResponse(await getUnitsById('1'), res);
  });

  router.put('/:id', async (req: Request, res: Response) => {
    await sleep(1000);
    const id = req.params.id;

    handleServiceResponse(await getUnitsById(id), res);
  });

  router.delete('/:id', async (req: Request, res: Response) => {
    await sleep(1000);
    const id = req.params.id;

    handleServiceResponse(await getUnitsById(id), res);
  });

  return router;
})();
