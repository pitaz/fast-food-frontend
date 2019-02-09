/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { UserNavigation } from './UserNavigation.jsx';


describe('UserNavigation Component', () => {
  it('should render the UserNavigation component for users', () => {
    const props = {
      logout: jest.fn(),
      userRole: 2
    };

    const wrapper = shallow(<UserNavigation {...props} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render the UserNavigation component for admin', () => {
    const props = {
      logout: jest.fn(),
      userRole: 1
    };

    const wrapper = shallow(<UserNavigation {...props} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should logout user', () => {
    const props = {
      logout: jest.fn(),
      userRole: 1
    };

    const wrapper = shallow(<UserNavigation {...props} />);

    const logout = wrapper.find('#logout');
    logout.simulate('click');

    expect(props.logout).toHaveBeenCalled();
    expect(wrapper.exists()).toBe(true);
  });
});
