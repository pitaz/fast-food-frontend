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
			default: return state;
  }
};
