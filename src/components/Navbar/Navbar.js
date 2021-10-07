import React from 'react';
import 'bulma/css/bulma.css';
import './Navbar.css';
import Logo from './logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <nav 
      className="navbar is-white" 
      role="navigation" 
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link 
          className="navbar-item" 
          to="/"
        >
          <img 
            src={ Logo }
            alt="Jurimetria" 
            width=''       
            
          />
        </Link>

        <Link 
          role="button" 
          className="navbar-burger" 
          aria-label="menu" 
          aria-expanded="false" 
          data-target="navbarBasicExample" 
          to="/"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>

      <div 
        id="navbarBasicExample" 
        className="navbar-menu"
      >
        <div className="navbar-start">
          <Link 
            className="navbar-item" 
            to="/processos"
          >
            Processos
          </Link>

          <Link 
            className="navbar-item" 
            to="/relatorios"
          >
            Relatórios
          </Link>

          
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link
              className="button is-info" 
              to="/"
              >
                <strong>Sign up</strong>
              </Link>
              <Link 
              className="button is-light" 
              to="/"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;