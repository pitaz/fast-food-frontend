import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({errors}) => (
  (
    <span>
     <p className="error">{errors}</p>
    </span>
  )
);

ErrorMessage.propTypes = {
  errors: PropTypes.instanceOf(Array),
};
export default ErrorMessage;
