import React, { useState, useEffect } from 'react';

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const showWidth = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', showWidth);
    return () => {
      window.removeEventListener('resize', showWidth);
    };
  });
  return (
    <>
      <h2>Width: {size}px</h2>
    </>
  );
};

export default UseEffectCleanup;
