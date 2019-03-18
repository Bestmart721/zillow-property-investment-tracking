
import { shallow } from 'enzyme';
import React from 'react';
import PropertyForm from '../components/PropertyForm';

describe('PropertyForm', () => {
  let wrapper;
  let props = {
  }

  beforeEach(() => {
    wrapper = shallow(
      <PropertyForm {...props} />,
    );
  });

});
