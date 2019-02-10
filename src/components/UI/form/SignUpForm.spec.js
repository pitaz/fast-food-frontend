/* eslint-disable react/no-children-prop */
/* eslint-disable no-undef */
import React from 'react';
import expect from 'expect';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignUpForm from './SignUpForm.jsx';


let wrapper;
let mockedState;
let props;

describe('The SignUp Component Test Suite', () => {
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
      signUpUser: jest.fn(),
    },
    error: {},
    auth: false,
  };
  });

  it('should match the snapshot', () => {
    wrapper = shallow(<SignUpForm {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render <SignUpFormForm /> Component', () => {
    wrapper = shallow(<SignUpForm {...props} />);
    expect(wrapper.length).toBe(1);
    expect(wrapper.find(SignUpForm)).toBeDefined();
  });


  // it('should test for onchange', () => { 
  //   wrapper = shallow(<SignUpForm {...props} />);

  //   const event = {
  //     target: { name: 'email', value: 'test@test.com' },
  //     preventDefault: () => { },
  //   };

  //   wrapper.instance().onChange(event);
  //   expect(wrapper.state().email).toEqual('test@test.com');
  //   expect(wrapper.instance().state.email).toEqual(event.target.value);
  // });

  
  // it('should test for onsubmit', () => { 
  //   wrapper = shallow(<SignUp {...props} />);

  //   const event = {
  //     target: { name: 'email', value: 'testtest.com' },
  //     preventDefault: () => { },
  //   };

  //   wrapper.instance().onChange(event);
  //   expect(wrapper.state().error).toEqual(undefined);
  //   expect(wrapper.instance().state.email).toEqual(event.target.value);
  // });
});
