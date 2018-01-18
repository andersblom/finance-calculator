// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { lifecycle } from 'recompose';

import './Header.css';

type Props = {
  isLoggedIn: boolean
}

const Header = (props: Props) => {
  const { isLoggedIn } = props;
  return (
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
};

Header.defaultProps = {
  isLoggedIn: false, // Should be false after css/markup is done
};

export default lifecycle({
  componentDidMount() {
    console.log("Mounted Header");
  }
})(Header);