/* eslint-disable no-undef */
import * as types from '../actions/types';
import viewOrderHistory from './viewOrderHistory';

describe('select_reducer', () => {
  it('renders with initial state', () => {
    const action = { type: types.FETCH_ORDER_HISTORY};
    const initialState = { orders: undefined, errors: {} };
    expect(viewOrderHistory(undefined, action)).toEqual(initialState);
  });

  it('renders correctly', () => {
    const action = { type: types.FETCH_ORDER_HISTORY_FAIL };
    expect(viewOrderHistory(undefined, action)).toMatchSnapshot();
  });

  it('returns the correct state', () => {
    const action = { type: types.FETCH_ORDER_HISTORY, orders: {}, errors: {}};
    expect(viewOrderHistory(undefined, action)).toMatchSnapshot();
  });
  it('returns the correct state', () => {
    const action = { type: types.CANCEL_ORDER, orders: {}};
    expect(viewOrderHistory(undefined, action)).toMatchSnapshot();
  });
  it('returns the correct state', () => {
    const action = { type: types.CANCEL_ORDER_FAIL, error: {}};
    expect(viewOrderHistory(undefined, action)).toMatchSnapshot();
  });
});
