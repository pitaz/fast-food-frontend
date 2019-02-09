/* eslint-disable no-undef */
import * as types from '../actions/types';
import menuReducer from './menuReducer';

describe('select_reducer', () => {
  it('renders with initial state', () => {
    const action = { type: types.GET_MEALS };
    const initialState = { error: {}, menu: undefined, singleMenu: null };
    expect(menuReducer(undefined, action)).toEqual(initialState);
  });

  it('renders correctly', () => {
    const action = { type: types.GET_MEALS };
    expect(menuReducer(undefined, action)).toMatchSnapshot();
  });

  it('returns the correct state', () => {
    const action = { type: types.GET_MEALS, menu: [] };
    expect(menuReducer(undefined, action)).toMatchSnapshot();
  });
});
