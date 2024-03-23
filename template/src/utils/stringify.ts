import { urlParams } from 'types/api/api';
import { Nullable } from 'types/helpers';

export const stringify = (obj: Nullable<urlParams>) => {
  if (!obj || Object.keys(obj).length === 0) {
    return '';
  }

  const keys = Object.keys(obj);

  const strArray = keys.map((key) => `${key}=${encodeURIComponent(obj[key])}`);
  const result = strArray.join('&');

  return result;
};
