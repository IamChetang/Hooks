import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const MultipleInputs = () => {
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' });

  const [people, setPeople] = useState([]);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPerson({ ...person, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: uuidv4() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: '', email: '', age: '' });
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
              value={person.firstName}
              onChange={changeHandler}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='email'>Email: </label>
            <input
              type='text'
              id='email'
              name='email'
              value={person.email}
              onChange={changeHandler}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='age'>Age: </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              onChange={changeHandler}
            />
          </div>

          <button type='submit'>Add Person</button>
        </form>

        {people.map((person, index) => {
          const { id, firstName, email, age } = person;

          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default MultipleInputs;
