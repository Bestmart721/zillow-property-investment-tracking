
import { shallow } from 'enzyme';
import React from 'react';
import GetDeepComps from '../components/GetDeepComps';

describe('GetDeepComps', () => {
  let wrapper;
  let props = {
    location: {
        pathname: 'api/properties/248011788'
    },
    fetchGetDeepComps: () => {},
    mappedZillowState: {
        get_zestimate: {
        },
        isFetching: true,
    }
  }

  beforeEach(() => {
    wrapper = shallow(
      <GetDeepComps {...props} />,
    );
  });

  it('contains a header that says "Deep Comparables Info"', () => {
    expect(wrapper.find('h1')).toBeDefined();
    expect(wrapper.html()).toContain('Deep Comparables Info'); // works
  });

});
