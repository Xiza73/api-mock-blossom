import { Request, Response, Router } from 'express';

import { getUserById, usersList } from '@/api/users/mocks/users-filter.mock';
import { handleServiceResponse } from '@/utils/http-handlers.util';
import { sleep } from '@/utils/sleep.util';

export const usersRouter: Router = (() => {
  const router = Router();

  router.post('/filter', async (req: Request, res: Response) => {
    await sleep(1000);
    const page = req.body.page;
    const limit = req.body.limit;

    // handleServiceResponse(userListParamError, res);
    handleServiceResponse(await usersList(page || 1, limit || 10), res);
  });

  router.get('/:id', async (req: Request, res: Response) => {
    await sleep(1000);
    const id = req.params.id;

    handleServiceResponse(await getUserById(id), res);
  });

  router.post('/filter/export-excel', async (req: Request, res: Response) => {
    try {
      await sleep(1000);
      const blob = new Blob(['Hello World!'], { type: 'text/plain' });
      res.setHeader('Content-disposition', 'attachment; filename=users.txt');
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
      res.setHeader('Content-disposition', 'attachment; filename=users.pdf');
      res.setHeader('Content-Type', 'application/pdf');
      res.send(buffer);
    } catch (_error) {
      res.status(500).send('Error generating PDF');
    }
  });

  router.put('/:id', async (req: Request, res: Response) => {
    await sleep(1000);
    const id = req.params.id;

    handleServiceResponse(await getUserById(id), res);
  });

  return router;
})();
