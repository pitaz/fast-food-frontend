/* eslint-disable react/no-children-prop */
/* eslint-disable no-undef */
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Menu, { mapStateToProps, mapDispatchToProps }  from './Menu.jsx';
import configureMockStore from 'redux-mock-store';


const mockStore = configureMockStore();
let wrapper;

describe('The Signin Component Test Suite', () => {
  beforeEach(() => {
    const props = {
      action: {
        fetchMeals: jest.fn(),
      },
      menu: {},
    };
    wrapper = shallow(<Menu {...props} />);
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

  it('renders the menu component', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  }); 

  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render <MenuForm /> Component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find(Menu)).toBeDefined();
  });
});
