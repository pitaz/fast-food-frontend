import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logout from '../../../actions/auth/logout';

class UserNavigation extends Component {
  logout = () => {
    const { logout } = this.props;
    logout();
  };

  render() {
    const { role } = this.props;
    return (
     <Fragment>
       {role === 'user'}
       <Link 
       to='/'
       id='logout'
       onClick={this.logout}>Logout</Link>
     </Fragment>
    );
  }
}
UserNavigation.propTypes = {
 role: PropTypes.string,
 logout: PropTypes.func
};

const mapStateToProps = state => ({
role: state.auth.user.role
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    logout: logout
  },
  dispatch
);
export default connect(mapStateToProps, mapDispatchToProps)(UserNavigation);
