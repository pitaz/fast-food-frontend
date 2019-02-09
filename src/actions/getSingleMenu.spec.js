import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import * as actions from './types';
import fetchSingleMenu from './getSingleMenu';


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
    moxios.stubRequest('https://fast-food-pitaz.herokuapp.com/api/v1/menu/1', {
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
        type: actions.GET_SINGLE_MENU,
        payload: 'menu fetched successfully'
      }];

    store.dispatch(fetchSingleMenu(2)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

  it('returns single menu option', () => {
    moxios.stubRequest('https://fast-food-pitaz.herokuapp.com/api/v1/menu/a', {
      status: 404,
      response: 'Menu not found'
    });

    const expected = [
      {
        type: actions.GET_SINGLE_MENU_FAIL,
        payload: 'menu fetch was unsuccessful',
      }];

    store.dispatch(fetchSingleMenu(2)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

  it('returns single menu option', () => {
    moxios.stubRequest('https://fast-food-pitaz.herokuapp.com/api/v1/menu', {
      status: 500,
      response: 'server error',
    });

    const expected = [
      {
        type: actions.GET_SINGLE_MENU_FAIL,
        payload: 'server error',
      }];

    store.dispatch(fetchSingleMenu(2)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

});
