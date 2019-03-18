
import { shallow } from 'enzyme';
import React from 'react';
import GetUpdatedPropertyDetails from '../components/GetUpdatedPropertyDetails';

describe('GetUpdatedPropertyDetails', () => {
  let wrapper;
  let props = {
    location: {
        pathname: 'api/properties/248011788'
    },
    fetchGetUpdatedPropertyDetails: () => {},
    mappedZillowState: {
        get_zestimate: {
        },
        isFetching: true,
    }
  }

  beforeEach(() => {
    wrapper = shallow(
      <GetUpdatedPropertyDetails {...props} />,
    );
  });

  it('contains a header that says "Updated Property Details"', () => {
    expect(wrapper.find('h1')).toBeDefined();
    //expect(wrapper.text().includes('Chart Info')).toBe(true);
    expect(wrapper.html()).toContain('Updated Property Details'); // works
  });

});
