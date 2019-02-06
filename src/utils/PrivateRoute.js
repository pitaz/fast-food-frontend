// /* eslint-disable react/jsx-no-bind */
// import React from 'react';
// import { toastr } from 'react-redux-toastr';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { Redirect, Route } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, auth, ...rest}) => {
//   if (!auth) {
//     toastr.error('You have to be logged in first!');
//   }
//   return (
//     <Route
//       {...rest}
//       render={
//         props => (auth
//           ? <Component {...props} />
//           : (
//             <Redirect to={{ pathname: '/', state: {from: props.location}}} />
//           ))
//       }
//     />
//   );
// };

// PrivateRoute.propTypes = {
//   auth: PropTypes.bool,
//   component: PropTypes.func,
//   location: PropTypes.shape({}),
// };

// const mapStateToProps = state => ({
//   auth: state.auth.isAuthenticated,
// });

// export default connect(mapStateToProps, null)(PrivateRoute);
