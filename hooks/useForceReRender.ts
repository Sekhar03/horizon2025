import { useState, useCallback } from 'react';

// Define a more explicit return type to prevent confusion
const useForceRerender = (): [number, () => void] => {
  const [key, setKey] = useState(0);

  const forceRerender = useCallback(() => {
    setKey(prevKey => prevKey + 1);
  }, []);

  return [key, forceRerender];
};

export default useForceRerender;