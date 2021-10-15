import React from 'react';
import Logo from './logo.png';
import { Link } from 'react-router-dom';

import 'bulma/css/bulma.css';
import './Navbar.css';

const Navbar = () => {
  return (

    <nav 
      className="navbar is-white" 
      role="navigation" 
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
            className='logo'
          />
        </Link>
      </div>

      <div 
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