
import { shallow } from 'enzyme';
import React from 'react';
import GetChart from '../components/GetChart';

describe('GetChart', () => {
  let wrapper;
  let props = {
    location: {
        pathname: 'api/properties/248011788'
    },
    fetchGetChart: () => {},
    mappedZillowState: {
        get_zestimate: {
        },
        isFetching: true,
    }
  }

  beforeEach(() => {
    wrapper = shallow(
      <GetChart {...props} />,
    );
  });

  it('contains a header that says "Chart Info"', () => {
    expect(wrapper.find('h1')).toBeDefined();
    //expect(wrapper.text().includes('Chart Info')).toBe(true);
    expect(wrapper.html()).toContain('Chart Info'); // works
  });

});
