import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = (props) => {
  const { isLoggedIn } = props;
  return (
    <header>
      <div className="app__logo">
        <span className="emoji__logo" role="img" aria-label="Money with wings">💸</span>
        <div className="app__logo__text">Financial.ly</div>
      </div>
      {
        isLoggedIn
        ?
          <nav className="appNav">
            <ul>
              <li><Link to="/">Docs</Link></li>
              <li><Link to="/">Account</Link></li>
              <li><Link to="/">Log out</Link></li>
            </ul>
          </nav>
        :
          null
      }
    </header>
  );
};

Header.defaultProps = {
  isLoggedIn: true, // Should be false after css/markup is done
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default Header;
