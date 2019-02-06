/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import jwt from 'jsonwebtoken';
import * as types from './types';
import menu from './menu';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('signin Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  const token = 'hggfdgAFFG.ljgghghghhPOUm_KI';

  it('creates SET_CURRENT_USER when signin action is succesful', (done) => {
    moxios.stubRequest(`${process.env.BASE_URL_PROD}/menu`, {
      status: 200,
      meal: {
        meal: 'egusi soup'
      },
    });

    const expected = [{
      type: types.GET_MEALS,
      meal: {
        meal: 'egusi soup'
      },
    }];
    store.dispatch(menu())
      .then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    done();
  });
});
