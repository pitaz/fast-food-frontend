/* eslint-disable no-undef */
import React from 'react';
import App from './App.jsx';

describe('Testing the App', () => {
  it('should render the Routes', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toBe(1);
  });
});
