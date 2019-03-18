
import { shallow } from 'enzyme';
import React from 'react';
import Property from '../components/Property';
import { Link } from 'react-router-dom';

describe('Property', () => {
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
    expect(wrapper.find(Link)).toHaveLength(5);
  });

});
