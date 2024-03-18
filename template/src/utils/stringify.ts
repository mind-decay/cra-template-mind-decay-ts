import { urlParams } from 'types/api';

export const stringify = (obj: urlParams | null) => {
  if (!obj || Object.keys(obj).length === 0) {
    return '';
  }

  const keys = Object.keys(obj);

  const strArray = keys.map((key) => `${key}=${encodeURIComponent(obj[key])}`);
  const result = strArray.join('&');

  return result;
};
