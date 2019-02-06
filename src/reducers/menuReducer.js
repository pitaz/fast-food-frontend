import * as types from "../actions/types";

const initialState = {
  menu: [],
  singleMenu: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MEALS:
      return {
        ...state,
        menu: action.menu
      };

      case types.GET_SINGLE_MENU:
      return {
        ...state,
        singleMenu: action.menu
      };

    case types.GET_SINGLE_MENU_FAIL:
      return {
				...state,
				singleMenu: null,
				error: action.error
			};
			default: return state;
  }
};
