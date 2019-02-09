/* eslint-disable react/no-children-prop */
/* eslint-disable no-undef */
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SingleMenuOption from './SingleMenuOption.jsx';

let wrapper;

describe('The Signin Component Test Suite', () => {
    const props = {
      action: {
        placeOrder: jest.fn(),
        fetchSingleMenu: jest.fn()
      },
      menu: {},
    };
    wrapper = shallow(<SingleMenuOption {...props} />);


  it('renders the SingleMenuOption component', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  }); 

  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render <SingleMenuOption /> Component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find(SingleMenuOption)).toBeDefined();
  });

  it('should render the Loading component if on request is found', () => {
    // const props = { ...setProps, request: null };
    const wrapper = shallow(<SingleMenuOption {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
});
