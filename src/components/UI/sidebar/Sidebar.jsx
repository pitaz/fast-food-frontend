import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logout from '../../../actions/auth/logout';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GuestNavigation from "../navbar/GuestNavigation.jsx";

const Sidebar = (props) => {
    return (
      <div id="mySidebar" className={props.show ? 'sidebar active' : 'sidebar'}>
        <Link to="/menu">Menu</Link>
        {props.auth.isAuthenticated ? 
          <span>
          <Link to="/order-history">Orders</Link>
          <Link 
       to='/'
       id='logout'
       onClick={props.logout}>Logout</Link>
          </span>
          : 
          <GuestNavigation />
        }
      </div>
    );
};

Sidebar.propTypes = {
  auth: PropTypes.instanceOf(Object),
  show: PropTypes.bool,
  logout: PropTypes.func,
};


const mapStateToProps = state => ({
  auth: state.auth
  });

  const mapDispatchToProps = dispatch => bindActionCreators(
    {
      logout
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
