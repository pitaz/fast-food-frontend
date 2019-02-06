import axios from "axios";
import jwt from "jsonwebtoken";
import Cookie from "cookies-js";
import toastr from "toastr";
import {
  SET_CURRENT_USER,
  SIGN_UP_ERRORS,
	REMOVE_ERROR_MESSAGE,
	SET_CURRENT_USER_FAIL
} from "../types";

export const setCurrent = user => ({
  type: SET_CURRENT_USER,
  user
});

export const setCurrentUserError = error => ({
  type: SET_CURRENT_USER_FAIL,
  error
});

export const registrationError = error => ({
  type: SIGN_UP_ERRORS,
  error
});

export const removeErrorMsgCompleted = user => ({
  type: REMOVE_ERROR_MESSAGE,
  user
});

export const removeErrorMsg = () => (dispatch) => {
 dispatch(removeErrorMsgCompleted());
};

const signUp = data => (dispatch) => {
	return axios.post('https://fast-food-pitaz.herokuapp.com/api/v1/auth/signup', data).then(
		(res) => {
			const { token } = res.data.data;
			const { message } = res.data;
			Cookie.set('token', token);
			toastr.success(message);
			dispatch(setCurrent(jwt.decode(token)));
			return true;
		}
	).catch((error) => {
		dispatch(setCurrentUserError(error.response.data));
	});
};

export default signUp;
