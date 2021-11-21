import React, { useState, useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';

// Stores value
// It wont trigger re-render
// target Dom node/elements

const useRefBasics = () => {
  const refContainer = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  useEffect(() => {
    refContainer.current.focus();
  });

  return (
    <>
      <form className='form' onSubmit={submitHandler}>
        <div className='form-control'>
          <input type='text' ref={refContainer}></input>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default useRefBasics;
