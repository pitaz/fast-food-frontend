import isEmpty from "is-empty";
import {
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAIL
} from "../actions/types";

const initialState = {
  order: {},
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER_SUCCESS:
      return {
        ...state,
        order: action.order
      };

    case PLACE_ORDER_FAIL:
      return {
				...state,
				order: {},
				error: action.error
			};
			default: return state;
  }
};
