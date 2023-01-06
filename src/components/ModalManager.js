import React from 'react';
import Login from './Login';
import Register from './Register';

const ModalManager = ({ closeFn, modal = '' }) => {
  return (
    <>
      <Login closeFn={closeFn} open={modal === 'login'} />
      <Register closeFn={closeFn} open={modal === 'register'} />
    </>
  );
};

export default ModalManager;
