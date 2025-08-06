import { Router } from 'express';

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
];

export const routes = (() => {
  const routes: Router = Router();

  routeList.forEach((route) => {
    routes.use(`/api${route.path}`, route.router);
  });

  return routes;
})();
