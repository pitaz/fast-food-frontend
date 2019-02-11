import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import * as actions from '../types';
import signUp from './signUp';

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
          password: 'fast',
          password_confirmation: 'fast'
        }
      }];

    store.dispatch(signUp(payload)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

  it('returns 404 when menu is not found', () => {
    moxios.stubRequest('https://fast-food-pitaz.herokuapp.com/api/v1/auth/signup', {
      status: 404,
      response: 'User not found'
    });

    const expected = [
      {
        type: actions.SET_CURRENT_USER_FAIL,
        error: 'User not found',
      }];

    store.dispatch(signUp(payload)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

  it('returns server error during signup', () => {
    moxios.stubRequest('https://fast-food-pitaz.herokuapp.com/api/v1/auth/signup', {
      status: 500,
      response: 'server error',
    });

    const expected = [
      {
        type: actions.SET_CURRENT_USER_FAIL,
        error: 'server error',
      }];

    store.dispatch(signUp(payload)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

  it('returns unauthorized during signup', () => {
    moxios.stubRequest('https://fast-food-pitaz.herokuapp.com/api/v1/auth/signup', {
      status: 401,
      response: 'order error',
    });

    const expected = [
      {
        type: actions.SET_CURRENT_USER_FAIL,
        error: 'order error',
      }];

    store.dispatch(signUp(payload)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
});
