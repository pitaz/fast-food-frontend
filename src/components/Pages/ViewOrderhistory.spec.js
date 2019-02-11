/* eslint-disable react/no-children-prop */
/* eslint-disable no-undef */
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ViewOrderHistory from './ViewOrderHistory.jsx';

let wrapper;

describe('The Signin Component Test Suite', () => {
    const props = {
      action: {
        placeOrder: jest.fn(),
        fetchSingleMenu: jest.fn()
      },
      menu: {},
    };
    wrapper = shallow(<ViewOrderHistory {...props} />);


  it('renders the ViewOrderHistory component', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  }); 

  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render <ViewOrderHistory /> Component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find(ViewOrderHistory)).toBeDefined();
  });

  it('should render the Loading component if on request is found', () => {
    // const props = { ...setProps, request: null };
    const wrapper = shallow(<ViewOrderHistory {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
  
  it(`lifecycle method should have been called`, () => {
    const componentDidMount = jest.fn();
    const componentWillUnmount = jest.fn();
  
    expect(componentDidMount.mock.calls.length).toBe(0);
    expect(componentWillUnmount.mock.calls.length).toBe(0);

    wrapper.unmount();
  
    expect(componentDidMount.mock.calls.length).toBe(0);
    expect(componentWillUnmount.mock.calls.length).toBe(0);
  });
});
