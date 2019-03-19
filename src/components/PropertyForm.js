import React from "react";

export default class PropertyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        zpid: this.props.zpid || '',
        address: this.props.address || '',
        city: this.props.city || '',
        state: this.props.state || '',
        zip: this.props.zip || '',
        description: this.props.description || '',
        image: this.props.image || '',
      };

      this.handleZPIDChange = this.handleZPIDChange.bind(this);
      this.handleAddressChange = this.handleAddressChange.bind(this);
      this.handleCityChange = this.handleCityChange.bind(this);
      this.handleStateChange = this.handleStateChange.bind(this);
      this.handleZipChange = this.handleZipChange.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleZPIDChange = (e) => {
      this.setState({ zpid: e.target.value });
    };

    handleAddressChange = (e) => {
      this.setState({ address: e.target.value });
    };

    handleCityChange = (e) => {
      this.setState({ city: e.target.value });
    };

    handleStateChange = (e) => {
      this.setState({ state: e.target.value });
    };

    handleZipChange = (e) => {
      this.setState({ zip: e.target.value });
    };

    handleDescriptionChange = (e) => {
      this.setState({ description: e.target.value });
    };

    handleImageChange = (e) => {
      this.setState({ image: e.target.value });
    };

    handleSubmit = () => {
      this.props.onFormSubmit({
        zpid: this.state.zpid,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        description: this.state.description,
        image: this.state.image,
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
      const submitText = this.props.id ? 'Update' : 'Create';
      return (
        <div className='ui centered card'>
          <div className='content'>
            <div className='ui form'>
              <div className='field'>
                <label>ZPID</label>
                <input
                  id='zpid-input'
                  type='text'
                  value={this.state.zpid}
                  onChange={this.handleZPIDChange}
                />
              </div>
              <div className='field'>
                <label>Address</label>
                <input
                  id='address-input'
                  type='text'
                  value={this.state.address}
                  onChange={this.handleAddressChange}
                />
              </div>
              <div className='field'>
                <label>City</label>
                <input
                  id='city-input'
                  type='text'
                  value={this.state.city}
                  onChange={this.handleCityChange}
                />
              </div>

              <div className='field'>
                <label>State</label>
                <input
                  id='state-input'
                  type='text'
                  value={this.state.state}
                  onChange={this.handleStateChange}
                />
              </div>

              <div className='field'>
                <label>Zip</label>
                <input
                  id='zip-input'
                  type='text'
                  value={this.state.zip}
                  onChange={this.handleZipChange}
                />
              </div>

              <div className='field'>
                <label>Description</label>
                <input
                  id='description-input'
                  type='text'
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                />
              </div>

              <div className='field'>
                <label>Image</label>
                <input
                  id='image-input'
                  type='text'
                  value={this.state.image}
                  onChange={this.handleImageChange}
                />
              </div>

              <div className='ui two bottom attached buttons'>
                <button
                  className='ui basic blue button'
                  onClick={this.handleSubmit}
                >
                  {submitText}
                </button>
                <button
                  className='ui basic red button'
                  onClick={this.props.onFormClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
