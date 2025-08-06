import { Request, Response, Router } from 'express';

import { getUserById, usersList } from '@/api/users/mocks/users-filter.mock';
import { handleServiceResponse } from '@/utils/http-handlers.util';
import { sleep } from '@/utils/sleep.util';

export const usersRouter: Router = (() => {
  const router = Router();

  router.post('/filter', async (req: Request, res: Response) => {
    await sleep(1000);
    const page = req.body.page;

    // handleServiceResponse(userListParamError, res);
    handleServiceResponse(await usersList(page || 1), res);
  });

  router.get('/:id', async (req: Request, res: Response) => {
    await sleep(1000);
    const id = req.params.id;

    handleServiceResponse(await getUserById(id), res);
  });

  return router;
})();
