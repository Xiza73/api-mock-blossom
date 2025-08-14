import { Request, Response, Router } from 'express';

import { handleServiceResponse } from '@/utils/http-handlers.util';
import { sleep } from '@/utils/sleep.util';

import { accountsList, getAccountById } from '../mocks/accounts-filter.mock';

export const accountsRouter: Router = (() => {
  const router = Router();

  router.get('/:id', async (req: Request, res: Response) => {
    await sleep(1000);
    const id = req.params.id;

    handleServiceResponse(await getAccountById(id), res);
  });

  router.post('/', async (req: Request, res: Response) => {
    await sleep(1000);

    // handleServiceResponse(userListParamError, res);
    handleServiceResponse(await getAccountById('1'), res);
  });

  router.post('/filter', async (req: Request, res: Response) => {
    await sleep(1000);
    const page = req.body.page;

    // handleServiceResponse(userListParamError, res);
    handleServiceResponse(await accountsList(page || 1), res);
  });

  router.post('/filter/export-excel', async (req: Request, res: Response) => {
    try {
      await sleep(1000);
      const blob = new Blob(['Hello World!'], { type: 'text/plain' });
      res.setHeader('Content-disposition', 'attachment; filename=accounts.txt');
      res.setHeader('Content-Type', 'text/plain');
      res.send(blob);
    } catch (_error) {
      res.status(500).send('Error generating Excel');
    }
  });

  router.post('/filter/export-pdf', async (req: Request, res: Response) => {
    try {
      await sleep(1000);

      const mockData = 'Hello World!';
      const buffer = Buffer.from(mockData, 'utf-8');
      res.setHeader('Content-disposition', 'attachment; filename=accounts.pdf');
      res.setHeader('Content-Type', 'application/pdf');
      res.send(buffer);
    } catch (_error) {
      res.status(500).send('Error generating PDF');
    }
  });

  router.put('/:id', async (req: Request, res: Response) => {
    await sleep(1000);
    const id = req.params.id;

    handleServiceResponse(await getAccountById(id), res);
  });

  router.delete('/:id', async (req: Request, res: Response) => {
    await sleep(1000);
    const id = req.params.id;

    handleServiceResponse(await getAccountById(id), res);
  });

  return router;
})();
