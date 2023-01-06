import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button'
import './index.scss'
import Modal from '../Modal/index';
import { GrClose } from "react-icons/gr";

const Login = ({ closeFn = () => null, open = false }) => {
  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="modal-window">
          <header className="modal--header">
            <div className='d-flex align-items-center justify-content-between'>
              <h1>Login or create an account</h1>
              <div onClick={closeFn} base ><GrClose /></div>
            </div>
            <div className='modal--header_info'>
              <h3>Returning Customer</h3>
              <p><strong>I am a returning customer</strong></p>
            </div>
          </header>
          <div className="modal--body">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">E-mail address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail address" />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <Button onClick={closeFn} base >Login</Button>
            </form>
          </div>
          <footer className="modal--footer">
            <Link>Create Account</Link>
            <Link>Forgotten Password</Link>
          </footer>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
