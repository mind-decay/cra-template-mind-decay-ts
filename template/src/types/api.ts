import { apiErrorsHandler } from './../utils/api/apiErrorsHandler';
export type urlParams = Record<string, string | number | boolean>;

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type RequestBody = Record<string, unknown> | null;

export type ErrorType = ReturnType<typeof apiErrorsHandler>;

export const isErrorType = (err: unknown): err is ErrorType => {
  return typeof err === 'string' && err.length > 0;
};
