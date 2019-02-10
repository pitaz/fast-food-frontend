/* eslint-disable react/no-children-prop */
/* eslint-disable no-undef */
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TableRow from './TableRow.jsx';
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
    wrapper = shallow(<TableRow {...props} />);
  });

  it('renders the TableRow component', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  }); 

  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render <TableRowForm /> Component', () => {
    // expect(wrapper.length).toBe(1);
    expect(wrapper.find(TableRow)).toBeDefined();
  });
});
