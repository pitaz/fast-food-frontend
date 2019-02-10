import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { validateSignUpInput } from "../../validations/validations";
import signUp from "../../actions/auth/signUp";
import SignUpForm from "../UI/form/SignUpForm.jsx";

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
    const { auth } = this.props;

    if (auth) {
      return <Redirect to="/menu" />;
    }

    return (
      <div className="container">
        <div className="wrapper card">
        <SignUpForm 
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
      signupUser: signUp
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(SignUp);
