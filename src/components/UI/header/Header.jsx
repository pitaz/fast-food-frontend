import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserNavigation from '../navbar/UserNavigation.jsx';
import GuestNavigation from '../navbar/GuestNavigation.jsx';
import SideBar from '../sidebar/Sidebar.jsx';
import logo from '../../../../public/images/logo-1.png';

class Header extends Component {
  state = {
    show: false
  }

  toggle = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }));
  };

  render() {
    return (
      <div>
        <div className="nav">
          <div className="nav-brand">
          <span onClick={this.toggle} >
          <i className="fa fa-bars menu-icon" />
          </span>
            <Link to="/">
              <img src={logo}/>
            </Link>
          </div>
          <div className="left">
            <div className="nav-items">
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              {this.props.auth.isAuthenticated ? <Link to="/order-history">Orders</Link> : ''}
              <a href=".#">Contact</a>
              <a href=".#">About</a>
            </div>
          </div>
          <div className="right">
            <div className="nav-items" id="items-right">
              {
                this.props.auth.isAuthenticated ? <UserNavigation /> : <GuestNavigation />
              }
            </div>
          </div>
        </div>
        <SideBar show={this.state.show} />
      </div>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.instanceOf(Object),
  toggle: PropTypes.func,
};

const mapStateToProps = state => ({
auth: state.auth
});

export default connect(mapStateToProps, null)(Header);
