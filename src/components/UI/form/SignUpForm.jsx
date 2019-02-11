import React from 'react';
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import ErrorMessage from '../error/ErrorMessage.jsx';
import TextInput from '../input/TextInput.jsx';

const SignUpForm = (props) => {
  const { error, email, errors, name, password, password_confirmation, onChange, onSubmit} = props;
 return (
  <div>
  <form>
  <div className="card-header">
  {
    (error && error.message) ? (
        <p id="error-message">{error.message}</p>
    ) : ''
  }
    <p>Sign up</p>
  </div>
  <div className="card-content form-group">
    <label>
      <b>Username</b>
    </label>
    <TextInput
      type="text"
      placeholder="Enter Username"
      name="name"
      field="name"
      value={name}
      onChange={onChange}
      required
    />
    {!error || errors === undefined ? '' : <ErrorMessage errors={errors.name} />}
    <label>
      <b>Email</b>
    </label>
    <TextInput
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
    <label>
      <b>Confirm Password</b>
    </label>
    <TextInput
      type="password"
      placeholder="Confirm Password"
      name="password_confirmation"
      field="password_confirmation"
      onChange={onChange}
      value={password_confirmation}
      required
    />
    {!error || errors === undefined ? '' : <ErrorMessage errors={errors.password_confirmation} />}
    <button type="submit" onClick={onSubmit} >Submit </button>
    <p>
      Already Registered? <Link to="/signin">Sign In</Link>
    </p>
  </div>
</form>
  </div>
);
};

SignUpForm.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  password_confirmation: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  error: PropTypes.instanceOf(Object),
  errors: PropTypes.instanceOf(Object),
};
export default SignUpForm;
