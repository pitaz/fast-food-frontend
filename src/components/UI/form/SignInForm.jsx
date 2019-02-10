import React from 'react';
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import ErrorMessage from '../error/ErrorMessage.jsx';
import TextInput from '../input/TextInput.jsx';

const SignInForm = (props) => {
  const { error, email, errors, password, onChange, onSubmit} = props;

 return (
  <div>
  <form>
  <div className="card-header">
  {
    (error && error.message) ? (
        <p id="error-message">{error.message}</p>
    ) : ''
  }
    <p>Sign In</p>
  </div>
  <div className="card-content form-group">
    <label>
      <b>Email</b>
    </label>
    <TextInput
      className="email"
      type="email"
      placeholder="Email"
      name="email"
      field="email"
      value={email}
      onChange={onChange}
      required
    />
    {!error || errors === undefined ? '' : <ErrorMessage errors={errors.email} />}
    
    <label>
      <b>Password</b>
    </label>
    <TextInput
      type="password"
      placeholder="Enter Password"
      name="password"
      field="password"
      onChange={onChange}
      value={password}
      required
    />
    {!error || errors === undefined ? '' : <ErrorMessage errors={errors.password} />}
    <button type="submit" onClick={onSubmit} >Submit </button>
    <h5>
      Already Registered? <Link to="/signup">Sign Up</Link>
    </h5>
  </div>
</form>
  </div>
);
};

SignInForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  error: PropTypes.instanceOf(Object),
  errors: PropTypes.instanceOf(Object),
};
export default SignInForm;
