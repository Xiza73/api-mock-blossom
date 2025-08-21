import { Router } from 'express';

import { accountsRouter } from '@/api/accounts/routes/accounts.route';
import { unitsRouter } from '@/api/accounts/routes/units.route';
import { activityListsRouter } from '@/api/activity-lists/routes/activity-lists.route';
import { assetListsRouter } from '@/api/asset-lists/routes/asset-lists.route';
import { authRouter } from '@/api/auth/routes/auth.router';
import { incidentTypesRouter } from '@/api/incident-types/routes/incident-types.route';
import { interventionTypesRouter } from '@/api/intervention-types/routes/intervention-types.route';
import { s3Router } from '@/api/s3/routes/s3.route';
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
  {
    path: ModulePath.INTERVENTION_TYPES,
    router: interventionTypesRouter,
  },
  {
    path: ModulePath.INCIDENT_TYPES,
    router: incidentTypesRouter,
  },
  {
    path: ModulePath.ASSET_LISTS,
    router: assetListsRouter,
  },
  {
    path: ModulePath.ACTIVITY_LISTS,
    router: activityListsRouter,
  },
  {
    path: ModulePath.S3,
    router: s3Router,
  },
];

export const routes = (() => {
  const routes: Router = Router();

  routeList.forEach((route) => {
    routes.use(`/api${route.path}`, route.router);
  });

  return routes;
})();
