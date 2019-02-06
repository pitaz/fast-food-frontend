import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div id="mySidebar" className="sidebar">
        <a href="#">Admin</a>
        <a href="#">Menu</a>
        <a href="#">Ordered meals</a>
        <a href="#"> Logout</a>
      </div>
    );
  }
}

export default Sidebar;
