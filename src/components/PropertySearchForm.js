import React from 'react';

import Field from './FormField';
import Client from '../client.js';
import { Card, Button, Col } from 'react-bootstrap';

const content = document.createElement('div');
document.body.appendChild(content);

export default class PropertySearchForm extends React.Component {
  static displayName = "Property Search Form";

  constructor(props) {
    super(props);
    this.client = new Client();
    this.state = {
        fields: {
          address: '',
          city: '',
          state: ''
        },
        fieldErrors: {},
        propertyAmount: '',
        propertyAddress: '',
        propertyZPID: '',
        propertyCity: '',
        propertyState: '',
        propertyZip: '',
        propertyLastUpdated: '',
        propertyValueChanged: '',
        propertyValueChangeDuration: '',
        _loading: false,
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.validate = this.validate.bind(this);
    this.clear = this.clear.bind(this);
    this.handlePropertyAdd = this.handlePropertyAdd.bind(this);
  }

  handlePropertyAdd = () => {
    const property = {
      zpid: this.state.propertyZPID,
      address: this.state.propertyAddress,
      city: this.state.propertyCity,
      state: this.state.propertyState,
      zip: this.state.propertyZip,
      description: 'description placeholder',
      image: 'image placeholder',
    }
    this.props.propertyAdd(property);
    this.clear();
  }

  onFormSubmit = (evt) => {
    const newProperty = this.state.fields;

    evt.preventDefault();

    if (this.validate()) return;

    const searchStr = `address=${newProperty.address}&citystatezip=${newProperty.city}, ${newProperty.state}`;

    let data = fetch(`/api/properties/get-search-results/${searchStr}`, {
        headers: {
            Accept: 'application/json',
        },
    }).then(res => res.json())
    .catch(err => console.log(err));

    data.then(res => {
      let result = res.data.response.results.result[0]
      let addressInfo = result.address[0];
      let zestimateInfo = result.zestimate[0];

      this.setState({
        propertyZPID: result.zpid[0],
        propertyAddress: addressInfo.street[0],
        propertyCity: addressInfo.city[0],
        propertyState: addressInfo.state[0],
        propertyZip: addressInfo.zipcode[0],
        propertyAmount: zestimateInfo.amount[0]._,
        propertyLastUpdated: zestimateInfo["last-updated"][0],
        propertyValueChanged: zestimateInfo.valueChange[0]._,
        propertyValueChangeDuration: zestimateInfo.valueChange[0]['$'].duration,
        fields: {
          address: '',
          city: '',
          state: '',
        },
      });

      this.forceUpdate();
    });
  };

  onInputChange = ({ name, value, error }) => {
    const fields = this.state.fields;
    const fieldErrors = this.state.fieldErrors;

    fields[name] = value;
    fieldErrors[name] = error;

    this.setState({ fields, fieldErrors });
  };

  validate = () => {
    const property = this.state.fields;
    const fieldErrors = this.state.fieldErrors;
    const errMessages = Object.keys(fieldErrors).filter((k) => fieldErrors[k]);

    if (!property.address) return true;
    if (!property.city) return true;
    if (!property.state || property.state.length !== 2) return true;
    if (errMessages.length) return true;

    return false;
  };

  clear = () => {
    this.setState({ propertyAmount: '' });
  }

  render() {
    return (
      <div>
        <h1>Get Property Zestimate</h1>
        <form onSubmit={this.onFormSubmit}>
          <Field
            id="address-input"
            placeholder='Address'
            name='address'
            value={this.state.fields.address}
            onChange={this.onInputChange}
            validate={(val) => (val ? false : 'Address Required')}
          />
          <br />
          <Field
            id="city-input"
            placeholder='City'
            name='city'
            value={this.state.fields.city}
            onChange={this.onInputChange}
            validate={(val) => (val ? false : 'City Required')}
          />
          <br />
          <Field
            id="state-inputs"
            placeholder='State (i.e. OR)'
            name='state'
            value={this.state.fields.state}
            onChange={this.onInputChange}
            validate={(val) => (val ? false : 'Two-Letter State Code Required')}
          />
          <br />

          <input type='submit' disabled={this.validate()} />
        </form>

        <div>
          {this.state.propertyAmount === '' && (
            <div>
              {/*
              <p>(property Zestimate search results...)</p>
              */}
            </div>
          )}
          { this.state.propertyAmount !== '' && (
            <div style={{ margin: '10px' }}>
              <Col sm={12} md={6} lg={6} >
              <Card>
                {/* <Card.Img variant="top" src={`./images/${this.props.image}`} style={{ height: '200px' }} /> */}
                <Card.Body>
                  <Card.Title>Property Information</Card.Title>
                  <ul>
                    <li>
                    Address: {
                      `${this.state.propertyAddress},
                      ${this.state.propertyCity}, ${this.state.propertyState} ${this.state.propertyZip}`
                    }
                    </li>
                    <li>
                      Value Estimate: {
                          (Number(this.state.propertyAmount))
                          .toLocaleString('en-US', {
                              style: 'currency',
                              currency: 'USD',
                            })
                          }
                    </li>
                    <li>
                      Value Last Updated: {this.state.propertyLastUpdated} days ago
                    </li>
                    <li>
                      Value Change: {
                          (Number(this.state.propertyValueChanged))
                          .toLocaleString('en-US', {
                              style: 'currency',
                              currency: 'USD',
                            })
                          }
                    </li>
                    <li>
                      Value Change Period: {this.state.propertyValueChangeDuration} days
                    </li>
                  </ul>

                  <Button variant="primary" style={{ margin: '10px' }} onClick={this.handlePropertyAdd}>
                    Add to Portfolio
                  </Button>
                  <Button variant="primary" style={{ margin: '10px' }} onClick={this.clear} >
                    Clear
                  </Button>

                </Card.Body>
              </Card>
              </Col>
            </div>
          )}
        </div>
      </div>
    );
  }
};
