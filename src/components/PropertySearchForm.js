import React from 'react';

import Field from './FormField';
import Client from '../client.js';

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
        property: '',
        _loading: false,
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.validate = this.validate.bind(this);
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
      let val = res.data.response.results.result[0].zestimate[0].amount[0]._;

      this.setState({
        property: val,
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
          {this.state.property === '' && (
            <div>
              {/* 
              <p>(property Zestimate search results...)</p>
              */}
            </div>
          )}
          { this.state.property !== '' && (
            <div>
              <h5>Property Zestimate:</h5>
              <p>
                { 
                  (Number(this.state.property))
                    .toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })
                }
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
};
