/* eslint-disable react/no-children-prop */
/* eslint-disable no-undef */
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ErrorMessage  from './ErrorMessage.jsx';
import configureMockStore from 'redux-mock-store';


const mockStore = configureMockStore();
let wrapper;

describe('The Signin Component Test Suite', () => {
  wrapper = shallow(<ErrorMessage />);

  it('renders the ErrorMessage component', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  }); 

  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render <ErrorMessageForm /> Component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find(ErrorMessage)).toBeDefined();
  });
});
