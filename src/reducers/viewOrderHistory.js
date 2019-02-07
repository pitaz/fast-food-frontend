import * as types from "../actions/types";

const initialState = {
  orders: [],
  errors: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ORDER_HISTORY:
      return {
        ...state,
        orders: action.orders
      };

    case types.FETCH_ORDER_HISTORY_FAIL:
      return {
				...state,
				errors: action.error
			};
			default: return state;
  }
};
