/* eslint-disable no-undef */
import * as types from '../actions/types';
import placeOrderReducer from './placeOrderReducer';

describe('select_reducer', () => {
  it('renders with initial state', () => {
    const action = { type: types.PLACE_ORDER_SUCCESS};
    const initialState = { order: undefined, error: {} };
    expect(placeOrderReducer(undefined, action)).toEqual(initialState);
  });

  it('renders correctly', () => {
    const action = { type: types.PLACE_ORDER_FAIL };
    expect(placeOrderReducer(undefined, action)).toMatchSnapshot();
  });

  it('returns the correct state', () => {
    const action = { type: types.PLACE_ORDER_SUCCESS, order: {}, error: {}};
    expect(placeOrderReducer(undefined, action)).toMatchSnapshot();
  });
});

describe('Request Reducer', () => {
  it('renders with initial state', () => {
    const action = { type: types.PLACE_ORDER_SUCCESS};
    const initialState = { order: undefined, error: {} };
    expect(placeOrderReducer(undefined, action)).toEqual(initialState);
  });


  it('should set the created request when passed CREATE_REQUEST', (done) => {
    const state = {};
    const order = {
      meal: 'Egusi soup',
      userId: 1,
      quantity: 2,
      price: 2500
    };

    const action = {
      type: types.PLACE_ORDER_SUCCESS,
      order
    };

    const newState = placeOrderReducer(state, action);
    expect(newState.order.userId).toEqual(1);
    done();
  });

  it('should set the error when passed CREATE_REQUEST_FAIL', (done) => {
    const state = {};
    const error = 'Order request failed';
    const action = {
      type: types.PLACE_ORDER_FAIL,
      error: error
    };

    const newState = placeOrderReducer(state, action);
    expect(newState.error).toEqual(error);
    done();
  });
});

