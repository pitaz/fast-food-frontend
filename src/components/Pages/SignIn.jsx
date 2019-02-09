import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { validateSignInInput } from "../../validations/validations";
import signIn, { removeErrorMsg } from "../../actions/auth/signIn";

export class SignIn extends Component {
  state = {
    email: '',
    password: '',
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
      action.signinUser(this.state);
    }
  };

  isValid = () => {
    const { errors, isValid } = validateSignInInput(this.state);
    if (!isValid) {
      this.setState({ errors, password: ""});
    }

    return isValid;
  };

  render() {
    const { auth, error } = this.props;
    const { email, password, errors } = this.state;

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
              <p>Sign In</p>
            </div>
            <div className="card-content form-group">
              <label>
                <b>Email</b>
              </label>
              <input
              id="nnn"
                className="email"
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
              <button type="submit" onClick={this.onSubmit} >Submit </button>
              <h5>
                Already Registered? <Link to="/signup">Sign Up</Link>
              </h5>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
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
      signinUser: signIn,
      deleteError: removeErrorMsg
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(SignIn);
