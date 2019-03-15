import React from 'react';
import { Table, Container, Carousel } from 'react-bootstrap';

export default class GetUpdatedPropertyDetails extends React.Component {
  constructor(props) {
    super(props);
    this.zpid = this.props.location.pathname.split('/')[2];
  }

  componentWillMount() {
    this.props.fetchGetUpdatedPropertyDetails(this.zpid);
  }

  render() {
    const zillowState = this.props.mappedZillowState;
    return (
      <Container>
      <div className="todoDetail">
        <h1>Updated Property Details</h1>
        {/* 
        <img src={`../${this.state.image}`} style={{ width: '400px' }} />
        */}
        <br />

        {!zillowState.get_zestimate && zillowState.isFetching && (
          <div>
            <p>Loading Zillow details....</p>
          </div>
        )}
        {zillowState.get_zestimate && !zillowState.isFetching && (
          <div>
            <h3>Property Page View Count</h3>
            <Table striped bordered hover style={{ width: 'auto' }} >
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {!zillowState.get_zestimate.pageViewCount && (
                      <div>Loading page view count details...</div>
                    )}
                    {zillowState.get_zestimate.pageViewCount && (
                      <div>{zillowState.get_zestimate.pageViewCount.currentMonth[0]}</div>
                    )}
                  </td>
                  <td>
                    {!zillowState.get_zestimate.pageViewCount && (
                      <div>Loading page view count details...</div>
                    )}
                    {zillowState.get_zestimate.pageViewCount && (
                      <div>{zillowState.get_zestimate.pageViewCount.total[0]}</div>
                    )}
                  </td>
                </tr>
              </tbody>
            </Table>

            <br />
            <h3>Address</h3>
            {!zillowState.get_zestimate.address && (
              <div>Loading address details...</div>
            )}
            {zillowState.get_zestimate.address && (
              <Table striped bordered hover style={{ width: 'auto' }}>
              <thead>
                <tr>
                  <th>Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zip</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{zillowState.get_zestimate.address.street[0]}</td>
                  <td>{zillowState.get_zestimate.address.city[0]}</td>
                  <td>{zillowState.get_zestimate.address.state[0]}</td>
                  <td>{zillowState.get_zestimate.address.zipcode[0]}</td>
                </tr>
              </tbody>
            </Table>
            )}

            <br />
            <h3>Links</h3>

            {!zillowState.get_zestimate.links && (
              <div>Loading link details...</div>
            )}
            {zillowState.get_zestimate.links && (
              <ul>
                <li>
                  <a href={zillowState.get_zestimate.links.homeDetails[0]}>
                    Home Details
                  </a>
                </li>
                <li>
                  <a href={zillowState.get_zestimate.links.photoGallery[0]}>
                    Photo Gallery
                  </a>
                </li>
                <li>
                  <a href={zillowState.get_zestimate.links.homeInfo[0]}>
                    Home Info
                  </a>
                </li>
              </ul>
            )}

            <br />
            <h3>Home Information</h3>

            {!zillowState.get_zestimate.editedFacts && (
              <div>Loading fact details...</div>
            )}
            {zillowState.get_zestimate.editedFacts && (
              <Table striped bordered hover style={{ width: 'auto' }}>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Bedrooms</th>
                  <th>Bathrooms</th>
                  <th>Square Feet</th>
                  <th>Year Built</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{zillowState.get_zestimate.editedFacts.useCode[0]}</td>
                  <td>{zillowState.get_zestimate.editedFacts.bedrooms[0]}</td>
                  <td>{zillowState.get_zestimate.editedFacts.bathrooms[0]}</td>
                  <td>
                    {zillowState.get_zestimate.editedFacts.finishedSqFt[0]}
                  </td>
                  <td>{zillowState.get_zestimate.editedFacts.yearBuilt[0]}</td>
                </tr>
              </tbody>
            </Table>
            )}

            <br />
            <h3>Images</h3>

            {/*
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{i}</Card.Title>
                <Card.Text>
                  Photo text
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            */}

            {/* <img key={i} src={image} /> */}

            {!zillowState.get_zestimate.images && (
              <div>
                <p>No images available</p>
              </div>
            )}
            {zillowState.get_zestimate.images && (
              <Carousel>
              {zillowState.get_zestimate.images.image[0].url.map((image, i) => (
                <Carousel.Item key={i} >
                <img
                  className="d-block w-100"
                  src={image}
                  alt="First slide"
                />
                {/*
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                */}
                </Carousel.Item>
              ))}
              </Carousel>
            )}

          </div>
        )}
      </div>
      </Container>
    );
  };
};
