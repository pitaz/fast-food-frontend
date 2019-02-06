/* eslint-disable react/no-children-prop */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignUp from './SignUp.jsx';

describe('The Signin Component Test Suite', () => {
  const wrapper = shallow(<SignUp />);
  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render <SignupForm /> Component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find(SignUp)).toBeDefined();
  });

  // it('it should render exactly one <LoadingSpinner /> component', () => {
  //   expect(wrapper.find(LoadingSpinner)).toHaveLength(1);
  // });

  // it('it should render exactly one error component', () => {
  //   expect(wrapper.find(SignInError)).toHaveLength(1);
  // });
});
