import { useState } from 'react';
import { ErrorType, isErrorType } from 'types/api/api';
import { Nullable } from 'types/helpers';

type useApiOptions<T> = {
  handleSuccess?: (res: T) => void;
  handleError?: (err: ErrorType) => void;
};

export const useApi = <T, Args extends unknown[] = unknown[]>(
  request: (...args: Args) => Promise<T>,
  { handleSuccess, handleError }: useApiOptions<T> = {}
): [typeof isLoading, (...args: Args) => Promise<T | undefined>, Nullable<typeof error>] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Nullable<ErrorType>>(null);

  const performRequest = async (...args: Args) => {
    setIsLoading(true);

    try {
      const response = await request(...args);

      handleSuccess?.(response);
      setError(null);

      return response;
    } catch (err) {
      if (isErrorType(err)) {
        setError(err);
        handleError?.(err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, performRequest, error];
};
