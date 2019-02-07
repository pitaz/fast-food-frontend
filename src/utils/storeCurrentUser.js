import Cookie from 'cookies-js';
import jwt from 'jsonwebtoken';
import logout from '../actions/auth/logout';
import { setCurrentUser } from '../actions/auth/signIn';

const storeCurrentUser = (store) => {
  const token = Cookie.get('token');
  if (token) {
    const decoded = jwt.decode(token);
    try {
      const isExpired = (decoded.exp < (Date.now() / 1000));
      if (!isExpired) {
        store.dispatch(setCurrentUser(decoded));
      } else {
        store.dispatch(logout());
      }
    } catch (error) {
      store.dispatch(logout());
    }
  }
};

export default storeCurrentUser;
