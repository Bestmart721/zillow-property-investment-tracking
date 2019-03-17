
import { shallow } from 'enzyme';
import React from 'react';
import Property from '../components/Property';

describe('ApPropertyp', () => {
  let wrapper;
  let props = {
      location: {
          pathname: 'api/properties/248011788'
      }
  }

  beforeEach(() => {
    wrapper = shallow(
      <Property {...props} />,
    );
  });

  it('contains 5 links for various property information', () => {
    expect(wrapper.find('Link')).toHaveLength(5);
  });

});
