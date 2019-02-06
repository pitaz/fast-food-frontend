import { combineReducers } from 'redux';

const appReducer = combineReducers({ });

const initialState = appReducer({}, {});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};

