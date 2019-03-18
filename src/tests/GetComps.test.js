
import { shallow } from 'enzyme';
import React from 'react';
import GetComps from '../components/GetComps';

describe('GetComps', () => {
  let wrapper;
  let props = {
    location: {
        pathname: 'api/properties/248011788'
    },
    fetchGetComps: () => {},
    mappedZillowState: {
        get_zestimate: {
        },
        isFetching: true,
    }
  }

  beforeEach(() => {
    wrapper = shallow(
      <GetComps {...props} />,
    );
  });

  it('contains a header that says "Comparable Property Info"', () => {
    expect(wrapper.find('h1')).toBeDefined();
    expect(wrapper.html()).toContain('Comparable Property Info'); // works
  });

});
