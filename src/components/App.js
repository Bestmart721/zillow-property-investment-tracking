import React from "react";
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <h1 style={{ padding: '20px' }}>Property Portfolio</h1>
        <div style={{ display: 'flex' }}>
          <Row>
            <Col sm={12} md={6} lg={3}>
            <Card>
              <Card.Img variant="top" src="../images/home1.jpg" style={{ height: '200px' }} />
              <Card.Body>
                <Card.Title>12610 SE 110th Ct</Card.Title>
                <Card.Text>
                  Investment condominium in Happy Valley, OR.
                </Card.Text>
                <Button variant="primary"><Link to={{ pathname: "/properties/248011825"}} style={{ color: 'white' }}>12610 SE 110th Ct</Link></Button>
              </Card.Body>
            </Card>
            </Col>

            <Col sm={12} md={6} lg={3}>
            <Card>
              <Card.Img variant="top" src="../images/home2.jpg" style={{ height: '200px' }} />
              <Card.Body>
                <Card.Title>12706 SE 110th Ct</Card.Title>
                <Card.Text>
                  Investment condominium in Happy Valley, OR.
                </Card.Text>
                <Button variant="primary"><Link to={{ pathname: "/properties/248011795" }} style={{ color: 'white' }}>12706 SE 110th Ct</Link></Button>
              </Card.Body>
            </Card>
            </Col>

            <Col sm={12} md={6} lg={3}>
            <Card>
              <Card.Img variant="top" src="../images/home3.jpg" style={{ height: '200px' }} />
              <Card.Body>
                <Card.Title>12740 SE 110th Ct</Card.Title>
                <Card.Text>
                  Investment condominium in Happy Valley, OR.
                </Card.Text>
                <Button variant="primary"><Link to={{ pathname: "/properties/248011788" }} style={{ color: 'white' }}>12740 SE 110th Ct</Link></Button>
              </Card.Body>
            </Card>
            </Col>

            <Col sm={12} md={6} lg={3}>
            <Card>
              <Card.Img variant="top" src="../images/home4.jpg" style={{ height: '200px' }} />
              <Card.Body>
                <Card.Title>12021 SE 104th Ct</Card.Title>
                <Card.Text>
                  Investment condominium in Happy Valley, OR.
                </Card.Text>
                <Button variant="primary"><Link to={{ pathname: "/properties/248011766" }} style={{ color: 'white' }}>12021 SE 104th Ct</Link></Button>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </div>
      </Container>
    );
  };
};
