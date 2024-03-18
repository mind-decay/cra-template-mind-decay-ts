import { useState } from 'react';
import { ErrorType, isErrorType } from 'types/api';

export const useApi = <T, Args extends unknown[] = unknown[]>(
  request: (...args: Args) => Promise<T>
): [typeof isLoading, typeof request, typeof error | null] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorType | null>(null);

  const performRequest = async (...args: Args): Promise<T> => {
    try {
      const response = await request(...args);
      setIsLoading(true);
      setError(null);

      return response;
    } catch (err) {
      if (isErrorType(err)) {
        setError(err);
      }

      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, performRequest, error];
};
