import isEmpty from "is-empty";
import {
  SET_CURRENT_USER,
  SET_CURRENT_USER_FAIL,
	LOG_OUT_USER
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };

    case SET_CURRENT_USER_FAIL:
      return {
				...state,
				isAuthenticated: false,
				user: {},
				error: action.error
			};

			case LOG_OUT_USER:
			return {
				...state,
				...initialState
			};
			default: return state;
  }
};
