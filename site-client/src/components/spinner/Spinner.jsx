import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ show, spinnerClass }) => {
  return (
    <React.Fragment>
      {show && (
        <div className={spinnerClass} role="status">
          <span className="sr-only">...Loading</span>
        </div>
      )}
    </React.Fragment>
  );
};

Spinner.propTypes = {
  show: PropTypes.bool.isRequired,
  spinnerClass: PropTypes.string.isRequired,
};

export default Spinner;