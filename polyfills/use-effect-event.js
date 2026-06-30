import { useRef, useCallback, useInsertionEffect } from 'react';

export function useEffectEvent(fn) {
  const ref = useRef(null);
  useInsertionEffect(() => {
    ref.current = fn;
  }, [fn]);
  return useCallback((...args) => {
    const f = ref.current;
    if (f) {
      return f(...args);
    }
  }, []);
}
