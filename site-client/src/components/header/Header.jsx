import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({ children }) => {
  return(
    <div className="header">{ children }</div>
  )
};

Header.propTypes = {
  children: PropTypes.object,
};

Header.defaultProps = {
  children: {},
};

export default Header;