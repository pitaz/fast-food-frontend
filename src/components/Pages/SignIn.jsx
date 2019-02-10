import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { validateSignInInput } from "../../validations/validations";
import signIn, { removeErrorMsg } from "../../actions/auth/signIn";
import SignInForm from '../UI/form/SignInForm.jsx';

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
  
    if (auth) {
      return <Redirect to="/menu" />;
    }

    return (
      <div className="container">
        <div className="wrapper card">
        <SignInForm 
        {...this.state}
        {...this.props}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        /> 
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
      signinUser: signIn
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(SignIn);
