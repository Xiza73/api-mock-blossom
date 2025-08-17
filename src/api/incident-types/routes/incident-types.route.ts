import { Request, Response, Router } from 'express';

import { handleServiceResponse } from '@/utils/http-handlers.util';
import { sleep } from '@/utils/sleep.util';

import { getIncidentTypeById, incidentTypesList } from '../mocks/incident-types-filter.mock';

export const incidentTypesRouter: Router = (() => {
  const router = Router();

  router.get('/:id', async (req: Request, res: Response) => {
    await sleep(1000);
    const id = req.params.id;

    handleServiceResponse(await getIncidentTypeById(id), res);
  });

  router.post('/', async (req: Request, res: Response) => {
    await sleep(1000);

    // handleServiceResponse(incidentTypesListParamError, res);
    handleServiceResponse(await getIncidentTypeById('1'), res);
  });

  router.post('/filter', async (req: Request, res: Response) => {
    await sleep(1000);
    const page = req.body.page;

    // handleServiceResponse(incidentTypesListParamError, res);
    handleServiceResponse(await incidentTypesList(page || 1), res);
  });

  router.put('/:id', async (req: Request, res: Response) => {
    await sleep(1000);
    const id = req.params.id;

    handleServiceResponse(await getIncidentTypeById(id), res);
  });

  router.delete('/:id', async (req: Request, res: Response) => {
    await sleep(1000);
    const id = req.params.id;

    handleServiceResponse(await getIncidentTypeById(id), res);
  });

  return router;
})();
