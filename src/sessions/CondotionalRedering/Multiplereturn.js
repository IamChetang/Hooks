import React, { useState, useEffect } from 'react';
const url = `https://api.github.com/users/kishorebabu0`;

const MultipleReturn = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState(false);

  const [user, setUser] = useState('No user');

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status < 300) {
          return resp.json();
        } else {
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  });

  if (isLoading) {
    return <h2>Loading.....</h2>;
  }

  if (isError) {
    return <h2>There is an Error</h2>;
  }
  return <h2>{user}</h2>;
};

export default MultipleReturn;
