import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { isLoggedIn } = props;
  return (
    <header>
      <div className="app__logo">
        <span className="emojiLogo" role="img" aria-label="Money with wings">💸</span>
        Financial.ly
      </div>
      {
        isLoggedIn
        ? <nav className="appNav"><ul><li>hi</li></ul></nav>
        : null
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
