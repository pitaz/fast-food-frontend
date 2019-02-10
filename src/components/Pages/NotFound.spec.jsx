/* eslint-disable react/no-children-prop */
/* eslint-disable no-undef */
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NotFound from './NotFound.jsx';


let wrapper;

describe('The Signin Component Test Suite', () => {
  wrapper = shallow(<NotFound />);
  it('renders the menu component', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  }); 

  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render <MenuForm /> Component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find(NotFound)).toBeDefined();
  });
});
