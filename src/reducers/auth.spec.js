/* eslint-disable no-undef */
import expect from 'expect';
import * as types from '../actions/types';
import auth from './auth';

describe('select_reducer', () => {
  it('renders with initial state', () => {
    const action = { type: types.SET_CURRENT_USER };
    const initialState = { isAuthenticated: false, user: undefined };
    expect(auth({}, action)).toEqual(initialState);
  });

  it('renders correctly', () => {
    const action = { type: types.SET_CURRENT_USER };
    expect(auth(undefined, action)).toMatchSnapshot();
  });

  it('returns the correct state', () => {
    const action = { type: types.SET_CURRENT_USER, user: {} };
    expect(auth(undefined, action)).toMatchSnapshot();
  });

  it('should set user if user is succesfully stored', () => {
    const initialState = {
      isAuthenticated: false,
      user: {},
      error: {},
    };

    const state = auth(initialState, {
      type: types.SET_CURRENT_USER,
      isAuthenticated: true,
      user: {
        userId: 1,
        email: 'email',
        username: 'peter',
        image: 'https://hardwaremassive.com/s…cture.jpg',
        roleId: 1,
      },
      error: {},
    });
    expect(state).toEqual({
      isAuthenticated: true,
      user: {
        userId: 1,
        email: 'email',
        username: 'peter',
        image: 'https://hardwaremassive.com/s…cture.jpg',
        roleId: 1,
      },
      error: {},
    });
  });

  it('renders correctly', () => {
    const action = { type: types.SET_CURRENT_USER_FAIL };
    expect(auth(undefined, action)).toMatchSnapshot();
  });

  it('returns the correct state', () => {
    const action = { type: types.SET_CURRENT_USER, error: {} };
    expect(auth(undefined, action)).toMatchSnapshot();
  });

  it('should set user if user login was unsuccessful', () => {
    const initialState = {
      isAuthenticated: false,
      user: {},
      error: {},
    };

    const state = auth(initialState, {
      type: types.SET_CURRENT_USER_FAIL,
      isAuthenticated: false,
      user: {},
      error: { message: 'Login unsuccessful' },
    });
    expect(state).toEqual({
      isAuthenticated: false,
      user: {},
      error: { message: 'Login unsuccessful' },
    });
  });

  it('should return errors if login was unsuccessful', () => {
    const initialState = {
      isAuthenticated: false,
      user: {},
      error: {
        message: 'login unsuccessful'
      },
    };

    const state = auth(initialState, {
      type: types.SET_CURRENT_USER_FAIL,
      isAuthenticated: false,
      user: {},
      error: { message: 'Login unsuccessful' },
    });
    expect(state).toEqual({
      isAuthenticated: false,
      user: {},
      error: { message: 'Login unsuccessful' },
    });
  });
  it('returns the correct state', () => {
    const action = { type: types.LOG_OUT_USER };
    expect(auth(undefined, action)).toMatchSnapshot();
  });
});
