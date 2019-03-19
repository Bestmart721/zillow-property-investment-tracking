
import { shallow } from 'enzyme';
import React from 'react';
import PropertyForm from '../components/PropertyForm';

describe('PropertyForm', () => {
  let wrapper;
  let props = {
    zpid: '12345',
    address: '10203 SE 40th Ave',
    city: 'Milwaukie',
    state: 'OR',
    zip: '97222',
    description: 'The home I grew up in',
    image: 'home1.jpg',
  }

  beforeEach(() => {
    wrapper = shallow(
      <PropertyForm {...props} />,
    );
  });

  it('initializes state with values', () => {
    expect(wrapper.state().zpid).toEqual(props.zpid);
    expect(wrapper.state().address).toEqual(props.address);
    expect(wrapper.state().city).toEqual(props.city);
    expect(wrapper.state().state).toEqual(props.state);
    expect(wrapper.state().zip).toEqual(props.zip);
    expect(wrapper.state().description).toEqual(props.description);
    expect(wrapper.state().image).toEqual(props.image);
  });

  it('has a method "handleZPIDChange"', () => {
    expect(wrapper.instance().handleZPIDChange).toBeDefined();
  });

  it('has a method "handleAddressChange"', () => {
    expect(wrapper.instance().handleAddressChange).toBeDefined();
  });

  it('has a method "handleCityChange"', () => {
    expect(wrapper.instance().handleCityChange).toBeDefined();
  });

  it('has a method "handleStateChange"', () => {
    expect(wrapper.instance().handleStateChange).toBeDefined();
  });

  it('has a method "handleZipChange"', () => {
    expect(wrapper.instance().handleZipChange).toBeDefined();
  });

  it('has a method "handleDescriptionChange"', () => {
    expect(wrapper.instance().handleDescriptionChange).toBeDefined();
  });

  it('has a method "handleImageChange"', () => {
    expect(wrapper.instance().handleImageChange).toBeDefined();
  });

  it('has a method "handleSubmit"', () => {
    expect(wrapper.instance().handleSubmit).toBeDefined();
  });

  it('should update the ZPID input field property', () => {
    const val = '1234567';
    const input = wrapper.find('#zpid-input');
    input.simulate("change", {
      target: { value: val }
    });
    expect(wrapper.state().zpid).toEqual(val);
  });

  it('should update the Address input field property', () => {
    const val = '10203 SE 10th Ave';
    const input = wrapper.find('#address-input');
    input.simulate("change", {
      target: { value: val }
    });
    expect(wrapper.state().address).toEqual(val);
  });

  it('should update the City input field property', () => {
    const val = 'Clackamas';
    const input = wrapper.find('#city-input');
    input.simulate("change", {
      target: { value: val }
    });
    expect(wrapper.state().city).toEqual(val);
  });

  it('should update the State input field property', () => {
    const val = 'WA';
    const input = wrapper.find('#state-input');
    input.simulate("change", {
      target: { value: val }
    });
    expect(wrapper.state().state).toEqual(val);
  });

  it('should update the Description input field property', () => {
    const val = 'My new description';
    const input = wrapper.find('#description-input');
    input.simulate("change", {
      target: { value: val }
    });
    expect(wrapper.state().description).toEqual(val);
  });

  it('should update the Image input field property', () => {
    const val = 'New image path';
    const input = wrapper.find('#image-input');
    input.simulate("change", {
      target: { value: val }
    });
    expect(wrapper.state().image).toEqual(val);
  });
});
