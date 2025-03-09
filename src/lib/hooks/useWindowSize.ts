import { useState, useEffect, useCallback } from 'react';

export const useWindowSize = () => {
  const [width, setWidth] = useState(0);

  const handleResize = useCallback(() => {
    const currentWidth = window.innerWidth;
    if (Math.abs(currentWidth - width) > 100) {
      setWidth(currentWidth);
    }
  }, [width]);

  useEffect(() => {
    const observer = new ResizeObserver(handleResize);
    observer.observe(document.documentElement);
    handleResize();

    return () => observer.disconnect();
  }, [handleResize]);

  return width;
}; 