
import { shallow } from 'enzyme';
import React from 'react';
import GetZestimate from '../components/GetZestimate';

describe('GetZestimate', () => {
  let wrapper;
  let props = {
    location: {
        pathname: 'api/properties/248011788'
    },
    fetchGetZestimate: () => {},
    mappedZillowState: {
        get_zestimate: {
        },
        isFetching: true,
    }
  }

  beforeEach(() => {
    wrapper = shallow(
      <GetZestimate {...props} />,
    );
  });

  it('contains a header that says "Zestimate Detail"', () => {
    expect(wrapper.find('h1')).toBeDefined();
    expect(wrapper.html()).toContain('Zestimate Detail'); // works
  });

});
