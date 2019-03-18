
import { shallow } from 'enzyme';
import React from 'react';
import PropertySearchForm from '../components/PropertySearchForm';
import Field from '../components/FormField';

describe('PropertySearchForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <PropertySearchForm />
    );
  });

  it('initializes `fields` with empty values', () => {
    expect(wrapper.state().fields.address).toEqual('');
    expect(wrapper.state().fields.city).toEqual('');
    expect(wrapper.state().fields.state).toEqual('');
  });

  it('initializes `fieldErrors` to an empty object', () => {
    expect(wrapper.state().fieldErrors).toEqual({});
  });

  it('initializes property information to empty strings', () => {
    expect(wrapper.state().propertyZPID).toEqual('');
    expect(wrapper.state().propertyAddress).toEqual('');
    expect(wrapper.state().propertyCity).toEqual('');
    expect(wrapper.state().propertyState).toEqual('');
    expect(wrapper.state().propertyZip).toEqual('');
    expect(wrapper.state().propertyAmount).toEqual('');
    expect(wrapper.state().propertyLastUpdated).toEqual('');
    expect(wrapper.state().propertyValueChanged).toEqual('');
    expect(wrapper.state().propertyValueChangeDuration).toEqual('');
  });

  it('initializes `_loading` to false', () => {
    expect(wrapper.state()._loading).toEqual(false);
  });

  it('contains three Field components', () => {
    expect(wrapper.find('Field')).toBeDefined();
    expect(wrapper.find(Field)).toHaveLength(3);
  });

  it('contains a header that says "Get Property Zestimate"', () => {
    expect(wrapper.find('h1')).toBeDefined();
    expect(wrapper.text().includes('Get Property Zestimate')).toBe(true);
  });

});
