import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import auth from './auth';
import menuReducer from './menuReducer';
import { LOG_OUT_USER } from '../actions/types';

const appReducer = combineReducers({ 
  auth,
  menuReducer, 
  toastr: toastrReducer
 });

const initialState = appReducer({}, {});

export const rootReducer = (state, action) => {
  if (action.type === LOG_OUT_USER) {
    state = initialState;
  }

  return appReducer(state, action);
};

