import React, { useState } from 'react';

const useStateCounter = () => {
  const [value, setValue] = useState(0);
  const decrementCount = () => {
    setValue(value - 1);
  };
  const incrementCount = () => {
    setValue(value + 1);
  };

  return (
    <>
      <h2>Counter</h2>
      <h1>{value}</h1>
      <div>
        <button className='btn' onClick={decrementCount}>
          Decrease
        </button>
        <button className='btn' onClick={incrementCount}>
          Increase
        </button>
      </div>
    </>
  );
};

export default useStateCounter;
