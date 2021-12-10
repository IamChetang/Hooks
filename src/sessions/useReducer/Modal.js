import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    const modalOut = setTimeout(() => {
      closeModal();
    }, 300);
    return () => clearTimeout(modalOut);
  });
  return (
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
