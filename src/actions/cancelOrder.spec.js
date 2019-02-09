import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import * as actions from './types';
import cancelOrder from './cancelOrder';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('getPosts actions', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('returns single menu option', () => {
    moxios.stubRequest('https://fast-food-pitaz.herokuapp.com/api/v1/orders/1', {
      status: 200,
      response: 'Order cancelled',
    });

    const expected = [
      {
        type: actions.CANCEL_ORDER,
        payload: 'order cancelled successfully'
      }];

    store.dispatch(cancelOrder(2)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

  it('returns single menu option', () => {
    moxios.stubRequest('https://fast-food-pitaz.herokuapp.com/api/v1/orders/a', {
      status: 404,
      response: 'order cancel failed'
    });

    const expected = [
      {
        type: actions.CANCEL_ORDER_FAIL,
        payload: 'order cancelling unsuccessful',
      }];

    store.dispatch(cancelOrder(2)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

  it('returns single menu option', () => {
    moxios.stubRequest('https://fast-food-pitaz.herokuapp.com/api/v1/orders', {
      status: 500,
      response: 'server error',
    });

    const expected = [
      {
        type: actions.CANCEL_ORDER_FAIL,
        payload: 'server error',
      }];

    store.dispatch(cancelOrder(2)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

});
