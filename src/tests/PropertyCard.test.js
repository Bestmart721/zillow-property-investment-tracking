
import { shallow } from 'enzyme';
import React from 'react';
import PropertyCard from '../components/PropertyCard';

describe('PropertyCard', () => {
  let wrapper;
  let props = {
  }

  beforeEach(() => {
    wrapper = shallow(
      <PropertyCard {...props} />,
    );
  });

});
