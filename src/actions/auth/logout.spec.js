/* eslint-disable no-undef */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../types';
import logout from './logout';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it('should dispatch LOGOUT_USER action', () => {
  const expectedActions = [{
    type: actions.LOG_OUT_USER,
  }];
  const store = mockStore({});
  store.dispatch(logout());
  expect(store.getActions()).toEqual(expectedActions);
});
