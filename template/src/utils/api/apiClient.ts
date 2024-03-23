import { stringify } from '../stringify';

import { RequestBody, RequestMethod, urlParams } from 'types/api/api';
import { apiErrorsHandler } from './apiErrorsHandler';
import { Nullable } from 'types/helpers';

import { SOME_API_URL } from 'constants';

const prepareUrl = (url: string, params: Nullable<urlParams>, baseURL: string) => {
  const stringifiedParams = stringify(params);
  const preparedURL = `${baseURL}/${url}?${stringifiedParams}`;
  const encode = encodeURI(preparedURL);

  return encode;
};

export const performRequest = async <T>(
  url: string,
  params: Nullable<urlParams>,
  method: RequestMethod,
  options: RequestInit | undefined,
  body: Nullable<RequestBody>,
  baseURL: string
): Promise<T> => {
  try {
    const preparedURL = prepareUrl(url, params, baseURL);

    const response = await fetch(preparedURL, {
      method: method || 'GET',
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: body && JSON.stringify(body),
    });

    if (response.ok) {
      const data: T = await response.json();

      return data;
    }

    throw new Error(String(response.status));
  } catch (err) {
    throw new Error(apiErrorsHandler(err));
  }
};

const get = <T>(url: string, params?: urlParams, options?: RequestInit, baseURL?: string): Promise<T> => {
  return performRequest<T>(url, params || null, 'GET', options, null, baseURL || SOME_API_URL);
};

const post = <T>(
  url: string,
  params?: urlParams,
  options?: RequestInit,
  body?: RequestBody,
  baseURL?: string
): Promise<T> => {
  return performRequest<T>(url, params || null, 'POST', options, body || null, baseURL || SOME_API_URL);
};

const put = <T>(
  url: string,
  params?: urlParams,
  options?: RequestInit,
  body?: RequestBody,
  baseURL?: string
): Promise<T> => {
  return performRequest<T>(url, params || null, 'PUT', options, body || null, baseURL || SOME_API_URL);
};

const del = <T>(url: string, baseURL?: string, params?: urlParams, options?: RequestInit): Promise<T> => {
  return performRequest<T>(url, params || null, 'DELETE', options, null, baseURL || SOME_API_URL);
};

export const apiClient = {
  get,
  post,
  put,
  del,
};
