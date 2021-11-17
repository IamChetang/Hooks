import React, { useState } from 'react';

// Javascript
// const input =document.getElementById()
//  const inputValue = input.value;

// React
// value, onChange
const FormErrorExample = () => {
  const [name, setName] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className='form' onSubmit={submitHandler}>
        <div className='container'>
          <label>Username</label>
          <input type='text' value={name}></input>
        </div>
        <button className='btn'>submit</button>
      </form>
    </>
  );
};

export default FormErrorExample;
