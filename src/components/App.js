import React from "react";
import { Container, Row } from 'react-bootstrap';
import Client from '../client.js';
import PropertySearchForm from './PropertySearchForm';
import EditablePropertyCard from './EditablePropertyCard';
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
    this.setState({
      properties: this.state.properties.concat(property),
    });
    this.client.createProperty(property);
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
    this.client.updateProperty(attrs);
  };

  deleteProperty = (propertyId) => {
    this.setState({
      properties: this.state.properties.filter(t => t.zpid !== propertyId),
    });
    this.client.deleteProperty(propertyId);
  };

  render() {
    if (this.state._loading) {
      return <img alt='loading' src='./images/loading.gif' />;
    }

    const properties = this.state.properties.map((property, i) => (
      <EditablePropertyCard
        key={ i }
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
