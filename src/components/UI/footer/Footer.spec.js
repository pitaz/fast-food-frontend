/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from './Footer.jsx';

describe('Footer component test', () => {
  const wrapper = shallow(<Footer />);
  it('renders the Footer component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
