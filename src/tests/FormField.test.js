
import { shallow } from 'enzyme';
import React from 'react';
import FormField from '../components/FormField';


describe('FormField', () => {
  const val = '10203 SE 40th Ave';
  const props = {
    id: "address-input",
    placeholder: 'Address',
    name: 'address',
    value: val,
    onChange: () => {},
    validate: (val) => (val ? false : 'Address Required'),
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FormField {...props} />,
    );
  });

  it('initializes `error` to a false', () => {
    expect(
      wrapper.state().error
    ).toEqual(false);
  });

  it('initializes `value` to a the passed in value', () => {
    expect(
      wrapper.state().value
    ).toEqual(val);
  });

  it('should update the input field property', () => {
    const input = wrapper.find('input');
    input.simulate("change", {
      target: { value: val }
    });
    expect(wrapper.state().value).toEqual(val);
  });

});
