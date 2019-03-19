
import { shallow } from 'enzyme';
import React from 'react';
import EditablePropertyCard from '../components/EditablePropertyCard';

describe('EditablePropertyCard', () => {
  let wrapper;
  let props = {
  }

  beforeEach(() => {
    wrapper = shallow(
      <EditablePropertyCard {...props} />,
    );
  });

  it('initializes `editFormOpen` with false', () => {
    expect(wrapper.state().editFormOpen).toEqual(false);
  });

  it('contains PropertyCard components', () => {
    expect(wrapper.find('PropertyCard')).toBeDefined();
    //expect(wrapper.find(PropertyCard)).toHaveLength(3);
  });

});
