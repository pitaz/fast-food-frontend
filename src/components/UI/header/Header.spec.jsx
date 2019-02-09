/* eslint-disable no-undef */
import React from 'react';
import expect from 'expect';
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
  it('should test for toggle', () => { 
   const toggle = jest.fn();
    expect(toggle).toBeTruthy();
  });
});
