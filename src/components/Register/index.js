import React from 'react';
import { GrClose } from "react-icons/gr";
import Button from '../Button'
import './index.scss'
import Modal from '../Modal/index';

const Register = ({ closeFn = () => null, open = false }) => {
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
              <p><strong>If you already have an account with us, please login at the login form.</strong></p>
            </div>
          </header>
          <div className="modal--body">
            <form>
              <div className="form-group">
                <label for="first_name">First Name</label>
                <input type="text" className="form-control" name='first_name' id="first_name" placeholder="First Name" />
              </div>
              <div className="form-group">
                <label for="last_name">Last Name</label>
                <input type="text" className="form-control" name='last_name' id="last_name" placeholder="Last Name" />
              </div>
              <div className="form-group">
                <label for="email">E-mail address</label>
                <input type="email" className="form-control" name='email' id="email" placeholder="E-mail address" />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" name='password' id="password" placeholder="Password" />
              </div>
              <div className="form-group">
                <label for="confirm_password">Confirm Password</label>
                <input type="password" className="form-control" name='confirm_password' id="confirm_password" placeholder="Password" />
              </div>
              <Button onClick={closeFn} base >Continue</Button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Register;
