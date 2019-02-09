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
      case types.CANCEL_ORDER:
      return {
      ...state,
      orders: state.orders.filter(item => item.id !== action.orderId )
    };
			default: return state;
  }
};
