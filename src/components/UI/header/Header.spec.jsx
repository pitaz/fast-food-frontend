/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './Header.jsx';


describe('Header Component', () => {
  const wrapper = shallow(<Header />);
  it('should render the Header component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
