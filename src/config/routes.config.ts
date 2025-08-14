import { Router } from 'express';

import { accountsRouter } from '@/api/accounts/routes/accounts.route';
import { unitsRouter } from '@/api/accounts/routes/units.route';
import { authRouter } from '@/api/auth/routes/auth.router';
import { usersRouter } from '@/api/users/routes/users.route';
import { ModulePath, Route } from '@/domain/route.enum';

const routeList: Route[] = [
  {
    path: ModulePath.AUTH,
    router: authRouter,
  },
  {
    path: ModulePath.USERS,
    router: usersRouter,
  },
  {
    path: ModulePath.ACCOUNTS,
    router: accountsRouter,
  },
  {
    path: ModulePath.UNITS,
    router: unitsRouter,
  },
];

export const routes = (() => {
  const routes: Router = Router();

  routeList.forEach((route) => {
    routes.use(`/api${route.path}`, route.router);
  });

  return routes;
})();
