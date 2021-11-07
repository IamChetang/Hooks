import React, { useState, useEffect } from 'react';

const useEffectBasics = () => {
  // useEffect is also a function
  // By default it runs AFTER EVERY RE-RENDER
  useEffect(() => {
    if (value > 3) {
      document.title = 'you came to different page';
    }
  });
  const [value, setValue] = useState(0);

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Increase
      </button>
    </>
  );
};

export default useEffectBasics;
