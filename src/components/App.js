import React from "react";
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Client from '../client.js';
import PropertySearchForm from './PropertySearchForm';

import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.client = new Client();
    this.state = {
      properties: [],
      totalValue: 0,
      _loading: false,
    };
    this.loadPropertiesFromServer = this.loadPropertiesFromServer.bind(this);
  }

  componentDidMount() {
    this.setState({ _loading: true });
    this.loadPropertiesFromServer();
    //setInterval(this.loadPropertiesFromServer, 5000);
  }

  loadPropertiesFromServer = () => {
    this.client.getProperties((serverProperties) => (
        this.setState({ _loading: false, properties: serverProperties })
      )
    );
  };

  handleCreateFormSubmit = (property) => {
    this.addProperty(property);
  };

  handleEditFormSubmit = (attrs) => {
    this.updateProperty(attrs);
  };

  handleTrashClick = (propertyId) => {
    this.deleteProperty(propertyId);
  };

  addProperty = (property) => {
    /*
    const t = helpers.newProperty(property);
    this.setState({
      properties: this.state.properties.concat(t),
    });
    */
  };

  updateProperty = (attrs) => {
    this.setState({
      properties: this.state.properties.map((property) => {
        if (property.zpid === attrs.zpid) {
          return Object.assign({}, property, {
            zpid: attrs.zpid,
            address: attrs.address,
            city: attrs.city,
            state: attrs.state,
            zip: attrs.zip,
            description: attrs.description,
            image: attrs.image,
          });
        } else {
          return property;
        }
      }),
    });
  };

  deleteProperty = (propertyId) => {
    this.setState({
      properties: this.state.properties.filter(t => t.zpid !== propertyId),
    });
  };

  render() {
    if (this.state._loading) {
      return <img alt='loading' src='./images/loading.gif' />;
    }

    const properties = this.state.properties.map((property) => (
      <EditablePropertyCard
        key={ property.zpid }
        address={ property.address }
        city={ property.city }
        state={ property.state }
        zip={ property.zip }
        image={ property.image }
        zpid={ property.zpid }
        description={ property.description }
        onTrashClick={this.handleTrashClick}
        onFormSubmit={this.handleEditFormSubmit}
      />
    ));

    return (
      <Container>
        <PropertySearchForm
          propertyAdd={this.handleCreateFormSubmit}
          propertyEdit={this.handleEditFormSubmit}
          propertyDelete={this.handleTrashClick}
        />
        <br />
        <h1 style={{ padding: '20px' }} id='property-portfolio-header'>Property Portfolio</h1>
        <div style={{ display: 'flex' }}>
          <Row>
            { properties }
          </Row>
        </div>
      </Container>
    );
  };
};

class EditablePropertyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editFormOpen: false,
    };

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleFormClose = this.handleFormClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.openForm = this.openForm.bind(this);
  }

  handleEditClick = () => {
    this.openForm();
  };

  handleFormClose = () => {
    this.closeForm();
  };

  handleSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.closeForm();
  };

  closeForm = () => {
    this.setState({ editFormOpen: false });
  };

  openForm = () => {
    console.log('--- opening edit form');
    this.setState({ editFormOpen: true });
  };

  render() {
    if (this.state.editFormOpen) {
      return (
        <PropertyForm
          id={this.props.zpid}
          zpid={this.props.zpid}
          address={this.props.address}
          city={this.props.city}
          state={this.props.state}
          zip={this.props.zip}
          description={this.props.description}
          image={this.props.image}
          onFormClose={this.handleFormClose}
          onFormSubmit={this.handleSubmit}
        />
        );
      } else {
        return (
          <PropertyCard
            zpid={this.props.zpid}
            address={this.props.address}
            city={this.props.city}
            state={this.props.state}
            zip={this.props.zip}
            description={this.props.description}
            image={this.props.image}
            onEditClick={this.handleEditClick}
            onTrashClick={this.props.onTrashClick}
          />
        );
      }
  }
}

class PropertyCard extends React.Component {

  handleTrashClick = () => {
    this.props.onTrashClick(this.props.zpid);
  };

  render() {
    return (
      <Col sm={12} md={6} lg={3} >
        <Card key={ this.props.id }>
          <Card.Img variant="top" src={`./images/${this.props.image}`} style={{ height: '200px' }} />
          <Card.Body>
            <Card.Title>{ this.props.address }</Card.Title>
            <Card.Text>
              { this.props.description }
            </Card.Text>

            <Button variant="primary">
              <Link to={{ pathname: `/properties/${ this.props.zpid }`}} style={{ color: 'white' }}>
                { this.props.address }
              </Link>
            </Button>

            <Button variant="primary" style={{ margin: '10px' }}>
              <span
                className='right floated edit icon'
                onClick={this.props.onEditClick}
              >
                Edit
              </span>
            </Button>

            <Button variant="primary" style={{ margin: '10px' }}>
              <span
                className='right floated edit icon'
                onClick={this.handleTrashClick}
              >
                Delete
              </span>
            </Button>

          </Card.Body>
        </Card>
      </Col>
    );
  }
}

class PropertyForm extends React.Component {
  state = {
    zpid: this.props.zpid || '',
    address: this.props.address || '',
    city: this.props.city || '',
    state: this.props.state || '',
    zip: this.props.zip || '',
    description: this.props.description || '',
    image: this.props.image || '',
  };

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

  render() {
    const submitText = this.props.id ? 'Update' : 'Create';
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>ZPID</label>
              <input
                type='text'
                value={this.state.zpid}
                onChange={this.handleZPIDChange}
              />
            </div>
            <div className='field'>
              <label>Address</label>
              <input
                type='text'
                value={this.state.address}
                onChange={this.handleAddressChange}
              />
            </div>
            <div className='field'>
              <label>City</label>
              <input
                type='text'
                value={this.state.city}
                onChange={this.handleCityChange}
              />
            </div>

            <div className='field'>
              <label>State</label>
              <input
                type='text'
                value={this.state.state}
                onChange={this.handleStateChange}
              />
            </div>

            <div className='field'>
              <label>Zip</label>
              <input
                type='text'
                value={this.state.zip}
                onChange={this.handleZipChange}
              />
            </div>

            <div className='field'>
              <label>Description</label>
              <input
                type='text'
                value={this.state.description}
                onChange={this.handleDescriptionChange}
              />
            </div>

            <div className='field'>
              <label>Image</label>
              <input
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
