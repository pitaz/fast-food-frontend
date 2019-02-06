/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import jwt from 'jsonwebtoken';
import * as types from '../types';
import signin from './signIn';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('signin Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  const signinData = {
    email: 'peter@mail.com',
    password: '12345dde',
  };
  const token = 'hggfdgAFFG.ljgghghghhPOUm_KI';

  it('creates SET_CURRENT_USER when signin action is succesful', (done) => {
    moxios.stubRequest(`${process.env.BASE_URL_PROD}/auth/signin`, {
      status: 200,
      response: 'Signin was succesful',
    });

    const expected = [{
      type: types.SET_CURRENT_USER,
      user: jwt.decode(token),
    }];
    store.dispatch(signin(signinData))
      .then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    done();
  });

  it('creates SET_CURRENT_USER_FAIL when signin is not successful', (done) => {
    moxios.stubRequest(`${process.env.BASE_URL_PROD}/auth/signin`, {
      status: 404,
      response: 'signin unsuccessful',
    });

    const expected = [{
      type: types.SET_CURRENT_USER_FAIL,
      error: 'signin unsuccessful',
    }];
    store.dispatch(signin(signinData))
      .then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    done();
  });

  it('creates SET_CURRENT_USER_FAIL when signin is not successful', (done) => {
    moxios.stubRequest(`${process.env.BASE_URL_PROD}/auth/signin`, {
      status: 400,
      response: 'signin unsuccessful',
    });

    const expected = [{
      type: types.REMOVE_CURRENT_USER_ERROR,
      error: '',
    }];
    store.dispatch(signin(signinData))
      .then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    done();
  });
});
