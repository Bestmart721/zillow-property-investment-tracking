import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Property extends React.Component {
  constructor(props) {
    super(props);
    this.zpid = this.props.location.pathname.split('/')[2];
    this.get_updated_property_details = `/properties/${this.zpid}/get-updated-property-details`;
    this.get_deep_comps = `/properties/${this.zpid}/get-deep-comps`;
    this.get_zestimate = `/properties/${this.zpid}/get-zestimate`;
    this.get_chart = `/properties/${this.zpid}/get-chart`;
    this.get_comps = `/properties/${this.zpid}/get-comps`;
  }

  render() {
    return (
      <Container>
      <div className="">
        <h2 >Property Detail: {this.zpid}</h2>
        {/* 
        <img src={ this.state.image } style={{ width: '400px' }} />
        */}
        <ul>
          <li>
            <Link to={{ pathname: this.get_updated_property_details }} >
              Get Updated Property Details
            </Link>
          </li>
          <li>
            <Link to={{ pathname: this.get_deep_comps }} >
              Get Deep Comps
            </Link>
          </li>
          <li>
            <Link to={{ pathname: this.get_zestimate }} >
              Get Zestimate
            </Link>
          </li>
          <li>
            <Link to={{ pathname: this.get_chart }} >
              Get Chart
            </Link>
          </li>
          <li>
            <Link to={{ pathname: this.get_comps }} >
              Get Comps
            </Link>
          </li>
        </ul>
      </div>
      </Container>
    );
  };
};
