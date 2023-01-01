import * as React from 'react';
import { Link } from 'react-router-dom';
import "./index.scss"
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div classname="navbar">
      <div className="container">
        <div className="top-header">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-4">
              <Link to="/">
                <img src="http://umino.demo.towerthemes.com/image/catalog/logo/logo.png" alt="Umino" />
              </Link>
            </div>
            <div className="col-lg-4">
              <div className="header_search">
                <form>
                  <input className='header_search_input' type="text" placeholder='Search Enter story here ...' />
                  <div className="search_btn">
                    <button>
                      <AiOutlineSearch />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="nav_heart_basket_icons d-flex justify-content-end">
                <div className="heart_icon">
                  <Link to="/whislist">
                    <AiOutlineHeart />
                    <span className='product_count'>0</span>
                  </Link>
                </div>
                <div className="basket_icon">
                  <Link to="/whislist">
                    <AiOutlineShoppingCart />
                    <span className='product_count'>0</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-header">
          <div className="row">
            <div className="col-lg-10">
              <nav>
                <ul className='nav-links d-flex align-items-center'>
                  <li className='nav-link'>
                    <Link to="/">Home</Link>
                  </li>
                  <li className='nav-link'>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li className='nav-link'>
                    <Link to="/specials">Specials</Link>
                  </li>
                  <li className='nav-link'>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li className='nav-link'>
                    <Link to="/blog">blog</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-2">
              <div className="user_login_register d-flex">
                <BsFillPersonFill />
                <div className="login_register d-flex align-items-center">
                  <Link>Register</Link>
                  <span> or</span>
                  <Link>Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Navbar