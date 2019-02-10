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
    store.clearActions();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  const payload = {
    name: 'egusi',

  };

  it('returns single menu option', () => {
    moxios.stubRequest('https://fast-food-pitaz.herokuapp.com/api/v1/orders/1', {
      status: 200,
      response: {
        id: 2,
        name: "Chicken soup",
        description: "Intercontinental",
        image: "images/chicken-dinner-dish-236781.jpg",
        price: 1800,
        dateCreated: "2019-02-07T10:03:11.553Z"
      },
    });

    const expected = [
      {
        type: actions.CANCEL_ORDER,
        orderId: 1
      }];

    store.dispatch(cancelOrder(payload)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

  it('returns 404 when menu is not found', () => {
    moxios.stubRequest('https://fast-food-pitaz.herokuapp.com/api/v1/orders', {
      status: 404,
      response: 'Menu not found'
    });

    const expected = [
      {
        type: actions.CANCEL_ORDER_FAIL,
        error: undefined,
      }];

    store.dispatch(cancelOrder(payload)).then(() => {
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
        error: undefined,
      }];

    store.dispatch(cancelOrder(payload)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

  it('returns single menu option', () => {
    moxios.stubRequest('https://fast-food-pitaz.herokuapp.com/api/v1/orders/1', {
      status: 401,
      response: 'order error',
    });

    const expected = [
      {
        type: actions.CANCEL_ORDER_FAIL,
        error: undefined,
      }];

    store.dispatch(cancelOrder(payload)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
});
