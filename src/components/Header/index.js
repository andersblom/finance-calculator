// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { lifecycle } from 'recompose';

import './Header.css';

const Header = (
  {
    isLoggedIn
  }:{
    isLoggedIn: Boolean
  }
) => (
  <header>
    <div className="app__logo">
      <span className="emoji__logo" role="img" aria-label="Money with wings">💸</span>
      <div className="app__logo__text">...</div>
    </div>
    <nav className="appNav">
      {
        isLoggedIn
        ?
          <ul>
            <li><Link to="/docs">Docs</Link></li>
            <li><Link to="/user/account">Account</Link></li>
            <li><Link to="/user/logout">Log out</Link></li>
          </ul>
        :
          <ul>
            <li><Link to="/docs">Docs</Link></li>
            <li><Link to="/login">Log in</Link></li>
            <li><Link to="/signup">Sign up</Link></li>
          </ul>
      }
    </nav>
  </header>
);

export default Header;