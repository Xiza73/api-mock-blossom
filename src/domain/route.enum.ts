import { Router } from 'express';

enum ModuleKey {
  AUTH = 'AUTH',
  USERS = 'USERS',
  ACCOUNTS = 'ACCOUNTS',
  UNITS = 'UNITS',
  INTERVENTION_TYPES = 'INTERVENTION_TYPES',
}

export const Module = {
  [ModuleKey.AUTH]: 'auth',
  [ModuleKey.USERS]: 'users',
  [ModuleKey.ACCOUNTS]: 'accounts',
  [ModuleKey.UNITS]: 'units',
  [ModuleKey.INTERVENTION_TYPES]: 'intervention-types',
} as const;
export type Module = (typeof Module)[keyof typeof Module];

export const ModulePath = {
  [ModuleKey.AUTH]: '',
  [ModuleKey.USERS]: '/users',
  [ModuleKey.ACCOUNTS]: '/accounts',
  [ModuleKey.UNITS]: '/units',
  [ModuleKey.INTERVENTION_TYPES]: '/intervention-types',
} as const;
export type ModulePath = (typeof ModulePath)[keyof typeof ModulePath];

export interface Route {
  path: ModulePath;
  router: Router;
}

export enum Method {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'delete',
}
