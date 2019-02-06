/* eslint-disable react/no-children-prop */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignIn from './SignIn.jsx';

let wrapper;
describe('The Signin Component Test Suite', () => {

  beforeEach(() => {
    const props = {
      action: {
        deleteError: jest.fn(),
        signinUser: jest.fn(),
      },
      error: {},
      auth: false,
    };
    wrapper = shallow(<SignIn {...props} />);
  });

  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render <SignInForm /> Component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find(SignIn)).toBeDefined();
  });

  // it('should set email when email changes', () => {
  //   const event = {
  //     target: {
  //       name: 'email',
  //       value: 'blaze@gmail.com'
  //     }
  //   };

  //   const email = wrapper.find('.email');

  //   email.simulate('change', event);

  //   const expectedEmail = 'blaze@gmail.com';

  //   expect(wrapper.instance().state.email).toBe(expectedEmail);
  // });

  // it('it should render exactly one <LoadingSpinner /> component', () => {
  //   expect(wrapper.find(LoadingSpinner)).toHaveLength(1);
  // });

  // it('it should render exactly one error component', () => {
  //   expect(wrapper.find(SignInError)).toHaveLength(1);
  // });
});
