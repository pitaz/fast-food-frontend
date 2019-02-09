/* eslint-disable react/no-children-prop */
/* eslint-disable no-undef */
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Landing from './Landing.jsx';

describe('The Signin Component Test Suite', () => {
  const wrapper = shallow(<Landing />);
  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render <LandingForm /> Component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find(Landing)).toBeDefined();
  });
});
