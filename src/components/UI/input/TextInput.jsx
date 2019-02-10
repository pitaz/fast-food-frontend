import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
const {className, type, placeholder, name, field, value, onChange } = props;
  return (
    <Fragment>
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      name={name}
      field={field}
      value={value}
      onChange={onChange}
      required
    />
    </Fragment>
  );
};

TextInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  field: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default TextInput;
