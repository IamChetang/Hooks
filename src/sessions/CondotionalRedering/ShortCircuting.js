import React from 'react';

//how short circuting works in React
//Terenary operator

const ShortCircuting = () => {
  const [text, setText] = React.useState('');

  const [isError, setIsError] = React.useState(false);

  return (
    <>
      <h1>{text || 'Kishore'}</h1>
      <h1>{text && 'Software Engineer'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? <h1>There is an eroor</h1> : <h1>There is an No eroor</h1>}
    </>
  );
};

export default ShortCircuting;
