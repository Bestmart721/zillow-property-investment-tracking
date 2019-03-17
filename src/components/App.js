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
      properties: []
    };
    this.loadPropertiesFromServer = this.loadPropertiesFromServer.bind(this);
  }

  componentDidMount() {
    this.loadPropertiesFromServer();
    //setInterval(this.loadPropertiesFromServer, 5000);
  }

  loadPropertiesFromServer = () => {
    this.client.getProperties((serverProperties) => (
        this.setState({ properties: serverProperties })
      )
    );
  };

  render() {
    const properties = this.state.properties.map((property) => (
      <PropertyCard 
        key={ property.zpid }
        address={ property.address }
        city={ property.city }
        state={ property.state }
        zip={ property.zip }
        image={ property.image }
        zpid={ property.zpid }
        description={ property.description }
      />
    ));

    return (
      <Container>
        <PropertySearchForm />

        <br />

        <h1 style={{ padding: '20px' }}>Property Portfolio</h1>
        <div style={{ display: 'flex' }}>
          <Row>
            { properties }
          </Row>
        </div>
      </Container>
    );
  };
};

class PropertyCard extends React.Component {
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
            </Card.Body>
          </Card>
        </Col>
      );
  }
}