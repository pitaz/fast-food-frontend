import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import * as actions from '../types';
import signIn from './signIn';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  email: 'egusi',
    password: 'fast'
});

describe('getPosts actions', () => {
  beforeEach(function () {
    moxios.install();
    store.clearActions();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  const payload = {
    email: 'egusi',
    password: 'fast'
  };

  it('returns single menu option', () => {
    moxios.stubRequest('https://fast-food-pitaz.herokuapp.com/api/v1/auth/login', {
      status: 200,
      response: 'successfully signed in',
    });

    const expected = [
      {
        type: actions.SET_CURRENT_USER,
        user: {
          email: 'email',
          password: 'fast'
        }
      }];

    store.dispatch(signIn(payload)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

  it('returns 404 when menu is not found', () => {
    moxios.stubRequest('https://fast-food-pitaz.herokuapp.com/api/v1/auth/login', {
      status: 404,
      response: 'User not found'
    });

    const expected = [
      {
        type: actions.SET_CURRENT_USER_FAIL,
        error: 'User not found',
      }];

    store.dispatch(signIn(payload)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

  it('returns single menu option', () => {
    moxios.stubRequest('https://fast-food-pitaz.herokuapp.com/api/v1/auth/login', {
      status: 500,
      response: 'server error',
    });

    const expected = [
      {
        type: actions.SET_CURRENT_USER_FAIL,
        error: 'server error',
      }];

    store.dispatch(signIn(payload)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

  it('returns unauthorize', () => {
    moxios.stubRequest('https://fast-food-pitaz.herokuapp.com/api/v1/orders/1', {
      status: 401,
      response: 'unauthorized',
    });

    const expected = [
      {
        type: actions.SET_CURRENT_USER_FAIL,
        error: 'unauthorized',
      }];

    store.dispatch(signIn(payload)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
});
