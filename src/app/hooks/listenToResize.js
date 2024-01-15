import { useState, useEffect } from 'react';

/* A hook to listen to resize events and to return the window's width */

const listenToResize = (elementRef) => {

  const [newWidth, setNewWidth] = useState({ width: undefined });
  
  useEffect(() => {
    if (!elementRef.current) {
      return false;
    }
    const handleChange = () => {
      setNewWidth({ width: window.innerWidth });
    };
    window.addEventListener('resize', handleChange);
    return () => {
      window.removeEventListener('resize', handleChange);
    };
  }, []);
  
  return newWidth;
};

export default listenToResize;