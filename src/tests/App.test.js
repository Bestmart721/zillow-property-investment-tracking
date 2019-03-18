
import { shallow } from 'enzyme';
import React from 'react';
import App from '../components/App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  it('initializes `properties` to a blank array', () => {
    expect(
      wrapper.state().properties
    ).toEqual([]);
  });

  it('contains a PropertySearchForm component', () => {
    expect(wrapper.find('PropertySearchForm')).toBeDefined();
  });

  it('contains a PropertyCard component', () => {
    expect(wrapper.find('PropertyCard')).toBeDefined();
  });

  /*
  it('contains a header that says "Property Portfolio"', () => {
    expect(wrapper.find('h1')).toBeDefined();
    expect(wrapper.text().includes('Property Portfolio')).toBe(true);
  });
  */

  it('contains a Row component', () => {
    expect(wrapper.find('Row')).toBeDefined();
  });

});
