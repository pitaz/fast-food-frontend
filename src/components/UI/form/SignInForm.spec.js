/* eslint-disable react/no-children-prop */
/* eslint-disable no-undef */
import React from 'react';
import expect from 'expect';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignInForm from './SignInForm.jsx';


let wrapper;
let mockedState;
let props;

describe('The SigninForm Component Test Suite', () => {
  beforeEach(() => {
  mockedState = {
    auth: {
      isAuthenticated: true,
      user: {
        id: 1,
        role: 'admin',
        email: 'peter@mail.com',
        iat: 1549688481,
        exp: 1549774881
      },
      error: {}
    },
  };
  props = {
    action: {
      deleteError: jest.fn(),
      signinUser: jest.fn(),
    },
    error: {},
    auth: false,
    isValid: jest.fn(),
  };
  });


  it('should match the snapshot', () => {
    wrapper = shallow(<SignInForm 
       auth={{ isAuthenticated: false, user: {}, error: {} }}
    error={{}}
    email='Heimdal'
    actions={() => {}}
    onChange={() => {}}
      />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render <SignInFormForm /> Component', () => {
    wrapper = shallow(<SignInForm 
       auth={{ isAuthenticated: false, user: {}, error: {} }}
    error={{}}
    email='Heimdal'
    actions={() => {}}
      />);
    expect(wrapper.length).toBe(1);
    expect(wrapper.find(SignInForm)).toBeDefined();
  });
 

  // it('should test for onchange', () => { 
  //   wrapper = shallow(<SignInForm {...props} />);

  //   const event = {
  //     target: { name: 'email', value: 'test@test.com' },
  //     preventDefault: () => { },
  //   };

  //   wrapper.instance().onChange(event);
  //   expect(wrapper.state().email).toEqual('test@test.com');
  //   expect(wrapper.instance().state.email).toEqual(event.target.value);
  // });

  // it('should test for onsubmit', () => { 
  //   wrapper = shallow(<SignInForm {...props} />);

  //   const event = {
  //     target: { name: 'email', value: 'testtest.com' },
  //     preventDefault: () => { },
  //   };

  //   wrapper.instance().onChange(event);
  //   expect(wrapper.state().error).toEqual(undefined);
  //   expect(wrapper.instance().state.email).toEqual(event.target.value);
  // });

//  it('should test the onSubmit function', () => {
//     const event = { preventDefault: () => {} };
//     wrapper = shallow(<SignInForm {...props} />);
//     const form = wrapper.find('form');
//     form.simulate('submit', event);
//     const loginUser = jest.fn(mockedState);
//     const promise = new Promise((resolve) => {
//       resolve(wrapper.instance().onSubmit);
//     });
//     promise.then(() => expect(loginUser).toHaveBeenCalledTimes(1));
//   });
});
