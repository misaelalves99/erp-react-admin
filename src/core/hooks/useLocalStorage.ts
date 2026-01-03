// src/core/hooks/useLocalStorage.ts
import { useCallback, useMemo, useState } from 'react';
import { safeJsonParse } from '../utils/storage';

export function useLocalStorage<T>(key: string, initial: T) {
  const initialValue = useMemo(() => {
    const parsed = safeJsonParse<T>(localStorage.getItem(key));
    return parsed ?? initial;
  }, [key, initial]);

  const [value, setValue] = useState<T>(initialValue);

  const write = useCallback(
    (next: T) => {
      setValue(next);
      localStorage.setItem(key, JSON.stringify(next));
    },
    [key],
  );

  return [value, write] as const;
}
