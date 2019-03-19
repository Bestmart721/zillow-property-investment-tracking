
import { shallow } from 'enzyme';
import React from 'react';
import PropertyCard from '../components/PropertyCard';

describe('PropertyCard', () => {
  let wrapper;
  let props = {
    onTrashClick: () => {}
  }

  beforeEach(() => {
    wrapper = shallow(
      <PropertyCard {...props} />,
    );
  });

  it('has a method "handleTrashClick"', () => {
    expect(wrapper.instance().handleTrashClick).toBeDefined();
  });

});
