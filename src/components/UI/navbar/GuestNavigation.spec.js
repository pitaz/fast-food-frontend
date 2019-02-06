/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GuestNavigation from './GuestNavigation.jsx';


describe('GuestNavigation Component', () => {
  const wrapper = shallow(<GuestNavigation />);
  it('should render the GuestNavigation component', () => {

    expect(wrapper.exists()).toBe(true);
  });
  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
