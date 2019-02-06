/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import jwt from 'jsonwebtoken';
import * as types from '../types';
import signup from './signUp';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('signup Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  const signupData = {
    username: 'john',
    email: 'peter@mail.com',
    password: '12345dde',
    confirm_password: '12345dde'
  };
  const token = 'hggfdgAFFG.ljgghghghhPOUm_KI';

  it('creates SET_CURRENT_USER when signin action is succesful', (done) => {
    moxios.stubRequest(`${process.env.BASE_URL_PROD}/auth/signup`, {
      status: 200,
      response: 'Signin was succesful',
    });

    const expected = [{
      type: types.SET_CURRENT_USER,
      user: jwt.decode(token),
    }];
    store.dispatch(signup(signupData))
      .then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    done();
  });

  it('creates SET_CURRENT_USER_FAIL when signup is not successful', (done) => {
    moxios.stubRequest(`${process.env.BASE_URL_PROD}/auth/signup`, {
      status: 404,
      response: 'signup unsuccessful',
    });

    const expected = [{
      type: types.SET_CURRENT_USER_FAIL,
      error: 'signup unsuccessful',
    }];
    store.dispatch(signup(signupData))
      .then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    done();
  });

  it('creates SET_CURRENT_USER_FAIL when signup is not successful', (done) => {
    moxios.stubRequest(`${process.env.BASE_URL_PROD}/auth/signup`, {
      status: 400,
      response: 'signup unsuccessful',
    });

    const expected = [{
      type: types.REMOVE_CURRENT_USER_ERROR,
      error: '',
    }];
    store.dispatch(signup(signupData))
      .then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    done();
  });
});
