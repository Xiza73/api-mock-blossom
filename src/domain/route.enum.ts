import { Router } from 'express';

enum ModuleKey {
  AUTH = 'AUTH',
}

export const Module = {
  [ModuleKey.AUTH]: 'auth',
} as const;
export type Module = (typeof Module)[keyof typeof Module];

export const ModulePath = {
  [ModuleKey.AUTH]: '/auth',
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
