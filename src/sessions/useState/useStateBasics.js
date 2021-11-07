import React, { useState } from 'react';

const useStateBasics = () => {
  const [userName, setUserName] = useState('Chetan G');
  const clickHandler = () => {
    if (userName === 'Chetan G') {
      setUserName('Vijay');
    } else {
      setUserName('Chetan G');
    }
  };

  return (
    <>
      <h2>{userName}</h2>
      <button name='button' className='btn' onClick={clickHandler}>
        Click here
      </button>
    </>
  );
};

export default useStateBasics;
