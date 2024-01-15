import { useState, useEffect } from 'react';

/* A hook to listen to resize events and to return the window's width */

const listenToResize = (elementRef) => {

  const getWidth = () => {
    if (typeof window !== 'undefined') {
      return {
        width: window.innerWidth,
      }
    } else {
      return {
        width: 0,
      }
    }
  };
  
  const [newWidth, setNewWidth] = useState(getWidth);
  
  useEffect(() => {
    if (!elementRef.current) {
      return false;
    }
    const handleChange = () => {
      setNewWidth(getWidth());
    };
    window.addEventListener('resize', handleChange);
    return () => {
      window.removeEventListener('resize', handleChange);
    };
  }, []);
  
  return newWidth;
};

export default listenToResize;