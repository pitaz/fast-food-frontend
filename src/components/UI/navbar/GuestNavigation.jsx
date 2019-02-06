import React, {Fragment} from 'react';
import {Link } from 'react-router-dom';

const GuestNavigation = () => (
  <Fragment>
  <Link to="/signin">Sign In</Link>
  <Link to="/signup">Sign Up</Link>
  </Fragment>
);

export default GuestNavigation;
