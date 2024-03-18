import { isErrorCodeType } from 'types/errors';

export const apiErrorsHandler = (errCode: unknown) => {
  const err = Number(errCode);

  if (isErrorCodeType(err)) {
    switch (err) {
      case 400:
        return 'Bad request';
      case 401:
        return 'Unauthorized';
      case 403:
        return 'Forbidden';
      case 404:
        return 'Not found';
      case 429:
        return 'Too many requests';
      case 500:
        return 'Internal server error';
      default:
        return 'Something went wrong';
    }
  }

  return 'Unexpected Error';
};
