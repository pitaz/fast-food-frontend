import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import * as actions from './types';
import fetchOrderHistory from './viewOrderHistory';


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
    moxios.stubRequest('https://fast-food-pitaz.herokuapp.com/api/v1/users/1/orders', {
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
        type: actions.GET_ORDER_HISTORY_SUCCESS,
        payload: 'menu fetched successfully'
      }];

    store.dispatch(fetchOrderHistory(2)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

  it('returns single menu option', () => {
    moxios.stubRequest('https://fast-food-pitaz.herokuapp.com/api/v1/users/4/orders', {
      status: 404,
      response: 'History not found'
    });

    const expected = [
      {
        type: actions.GET_ORDER_HISTORY_FAIL,
        payload: 'menu fetch was unsuccessful',
      }];

    store.dispatch(fetchOrderHistory(2)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

  it('returns server on an unsuccessful retrieval', () => {
    moxios.stubRequest('https://fast-food-pitaz.herokuapp.com/api/v1/users/orders', {
      status: 500,
      response: 'server error',
    });

    const expected = [
      {
        type: actions.GET_ORDER_HISTORY_FAIL,
        payload: 'server error',
      }];

    store.dispatch(fetchOrderHistory(2)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

});
