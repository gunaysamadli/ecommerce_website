import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import Shop from "./pages/Shop";
import Login from "./components/Login";
import Register from "./components/Register";
import ModalManager from "./components/ModalManager";


export default function App() {

  const [modalOpen, setModal] = useState(false);

  const closeModal = () => {
    setModal('');
  };

  return (
    <Router>
      <div className="app--shell" onClick={openModal}>
        <Navbar closeFn={closeModal} modal={modalOpen} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/shop" exact>
            <Shop />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/error" exact>
            <Error />
          </Route>
          <Redirect to="/error" />
        </Switch>
        <ModalManager closeFn={closeModal} modal={modalOpen} />
        <Footer />
      </div>
    </Router>
  );
}