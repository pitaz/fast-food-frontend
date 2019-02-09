import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { validateSignUpInput } from "../../validations/validations";
import signUp, { removeErrorMsg } from "../../actions/auth/signUp";

export class SignUp extends Component {
  state = {
    email: '',
    name: '',
    password: '',
    password_confirmation: '',
    errors: {}
  };

  onChange = event => {
    const { errors } = this.state;
    if (errors[event.target.name]) {
      const newErrors = Object.assign({}, errors);
      delete newErrors[event.target.name];
      this.setState({
        [event.target.name]: event.target.value,
        errors: newErrors
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };

  onSubmit = e => {
    const { action } = this.props;
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {} });
      action.signupUser(this.state);
    }
  };

  isValid = () => {
    const { errors, isValid } = validateSignUpInput(this.state);
    if (!isValid) {
      this.setState({ errors, password: "", password_confirmation: "" });
    }

    return isValid;
  };

  render() {
    const { auth, error } = this.props;
    const { name, email, password, password_confirmation, errors } = this.state;

    if (auth) {
      return <Redirect to="/menu" />;
    }

    return (
      <div className="container">
        <div className="wrapper card">
    
          <form>
            <div className="card-header">
            {
              (error && error.message) ? (
                // <div className="error-cont" id="error">
                // <span id="closebtn">&times;</span> 
                  <p id="error-message">{error.message}</p>
                // </div>
              ) : ''
            }
              <p>Sign up</p>
            </div>
            <div className="card-content form-group">
              <label>
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="name"
                field="name"
                value={name}
                onChange={this.onChange}
                required
              />
              <p className="error">{errors.name}</p>
              <label>
                <b>Email</b>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                field="email"
                value={email}
                onChange={this.onChange}
                required
              />
              <p className="error">{errors.email}</p>
              <label>
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                field="password"
                onChange={this.onChange}
                value={password}
                required
              />
              <p className="error">{errors.password}</p>
              <label>
                <b>Confirm Password</b>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                name="password_confirmation"
                field="password_confirmation"
                onChange={this.onChange}
                value={password_confirmation}
                required
              />
              <p className="error">{errors.password_confirmation}</p>
              <button type="submit" onClick={this.onSubmit} >Submit </button>
              <h5>
                Already Registered? <Link to="/signin">Sign In</Link>
              </h5>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  auth: PropTypes.bool,
  error: PropTypes.instanceOf(Object),
  action: PropTypes.instanceOf(Object)
};

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated,
  error: state.auth.error
});

const matchDispatchToProps = dispatch => ({
  action: bindActionCreators(
    {
      signupUser: signUp,
      deleteError: removeErrorMsg
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(SignUp);
