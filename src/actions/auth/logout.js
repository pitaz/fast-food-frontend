import Cookie from 'cookies-js';
import { LOG_OUT_USER } from '../../actions/types';

export const removeCurrentUser = () => ({
 type: LOG_OUT_USER
});

const logout = () => (dispatch) => {
 Cookie.expire('token');
 dispatch(removeCurrentUser({}));
};

export default logout;
