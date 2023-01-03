import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { FaFacebookF,FaTwitter,FaInstagram ,FaLinkedinIn,FaRss} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-4">
            <div className="footer-links d-flex">
              <div className="footer-link">
                <FaFacebookF/>
              </div>
              <div className="footer-link">
                <FaTwitter/>
              </div>
              <div className="footer-link">
                <FaInstagram/>
              </div>
              <div className="footer-link">
                <FaLinkedinIn/>
              </div>
              <div className="footer-link">
                <FaRss/>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-center text-center">
              <Link>
                <img src="http://umino.demo.towerthemes.com/image/catalog/logo/logo.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 text-end">
            <div className="footer-payments">
              <div className="footer-payment">
                <img src="http://umino.demo.towerthemes.com/image/catalog/ptblock/payment.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer