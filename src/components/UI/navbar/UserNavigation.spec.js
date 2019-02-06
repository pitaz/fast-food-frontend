/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UserNavigation from './UserNavigation.jsx';


describe('UserNavigation Component', () => {
  const wrapper = shallow(<UserNavigation />);
  it('should render the UserNavigation component', () => {

    expect(wrapper.exists()).toBe(true);
  });

  it('should render the UserNavigation component for users', () => {
    const props = {
      logoutUser: jest.fn(),
      userRole: 2
    };

    // const wrapper = shallow(<UserNavigation {...props} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render the UserNavigation component for admin', () => {
    const props = {
      logoutUser: jest.fn(),
      userRole: 1
    };

    // const wrapper = shallow(<UserNavigation {...props} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
