import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes  from 'prop-types';

const Navigation = ({ paths }) => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light">
      <div>
        <ul className="navbar-nav mr-auto main-nav">
          {paths && paths.map(( { title, url }, idx) => (
            <li className="nav-item" key={`nav_${idx}`}>
              <Link to={url} className="nav-link">{ title }</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  paths: PropTypes.arrayOf(PropTypes.object),
};

Navigation.defaultProps = {
  paths: [],
};

export default Navigation;