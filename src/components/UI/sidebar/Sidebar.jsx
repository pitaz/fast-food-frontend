import React, { Component } from "react";
import PropTypes from 'prop-types';

const Sidebar = (props) => {
    return (
      <div id="mySidebar" className={props.show ? 'sidebar active' : 'sidebar'}>
        <a href="#">Admin</a>
        <a href="#">Menu</a>
        <a href="#">Ordered meals</a>
        <a href="#"> Logout</a>
      </div>
    );
};

Sidebar.propTypes = {
  auth: PropTypes.instanceOf(Object),
  show: PropTypes.bool,
};


export default Sidebar;
