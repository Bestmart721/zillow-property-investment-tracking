import React from "react";
import { Link } from 'react-router-dom';
import { Card, Button, Col } from 'react-bootstrap';

export default class PropertyCard extends React.Component {
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
