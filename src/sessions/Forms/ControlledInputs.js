import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');

  const [email, setEmail] = useState('');

  const [people, setPeople] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { id: uuidv4(), firstName, email };
      setPeople((people) => {
        return [...people, person];
      });

      setFirstName('');
      setEmail('');
    }
  };
  return (
    <>
      <article>
        <form className='form' onSubmit={submitHandler}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name: </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <button className='btn' type='submit'>
            Add Person
          </button>
        </form>

        {people.map((person, index) => {
          const { id, firstName, email } = person;

          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
