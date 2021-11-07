import React from 'react';

const UseStateCase = () => {
  let user = 'Chetan G';
  const clickHandler = () => {
    user = 'Vijay S G';
    console.log(user);
  };
  return (
    <React.Fragment>
      <h1>{user}</h1>
      <button type='button' className='btn' onClick={clickHandler}>
        Update user
      </button>
    </React.Fragment>
  );
};

export default UseStateCase;
