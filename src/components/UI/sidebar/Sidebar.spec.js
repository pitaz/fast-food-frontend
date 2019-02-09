/* eslint-disable no-undef */
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Sidebar from './Sidebar.jsx';


describe('Sidebar Component', () => {
  const wrapper = shallow(<Sidebar />);
  it('should render the Sidebar component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
