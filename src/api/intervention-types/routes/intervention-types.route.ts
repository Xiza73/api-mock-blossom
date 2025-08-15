import { Request, Response, Router } from 'express';

import { handleServiceResponse } from '@/utils/http-handlers.util';
import { sleep } from '@/utils/sleep.util';

import { getInterventionTypeById, interventionTypesList } from '../mocks/intervention-types-filter.mock';

export const interventionTypesRouter: Router = (() => {
  const router = Router();

  router.get('/:id', async (req: Request, res: Response) => {
    await sleep(1000);
    const id = req.params.id;

    handleServiceResponse(await getInterventionTypeById(id), res);
  });

  router.post('/', async (req: Request, res: Response) => {
    await sleep(1000);

    // handleServiceResponse(interventionTypesListParamError, res);
    handleServiceResponse(await getInterventionTypeById('1'), res);
  });

  router.post('/filter', async (req: Request, res: Response) => {
    await sleep(1000);
    const page = req.body.page;

    // handleServiceResponse(interventionTypesListParamError, res);
    handleServiceResponse(await interventionTypesList(page || 1), res);
  });

  router.put('/:id', async (req: Request, res: Response) => {
    await sleep(1000);
    const id = req.params.id;

    handleServiceResponse(await getInterventionTypeById(id), res);
  });

  router.delete('/:id', async (req: Request, res: Response) => {
    await sleep(1000);
    const id = req.params.id;

    handleServiceResponse(await getInterventionTypeById(id), res);
  });

  return router;
})();
