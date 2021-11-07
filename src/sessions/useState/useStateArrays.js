import React, { useState } from 'react';

const useStateArrays = () => {
  const [users, setUser] = useState([
    'chetan',
    'vijay',
    'archana',
    'shrikanth',
    'pooja',
  ]);
  const deleteUser = (id) => {
    let newUsers = users.filter((user) => user.id !== users);
    setUser(newUsers);
    console.log('deleted');
  };
  return (
    <>
      {users.map((user, index) => {
        return (
          <div className='item' key={index}>
            <h4>{user}</h4>
            <button type='button' onClick={() => deleteUser}>
              Delete
            </button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setUser([])}>
        Click to remove
      </button>
    </>
  );
};

export default useStateArrays;
