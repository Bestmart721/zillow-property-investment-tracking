import React from 'react'
import { Table } from 'react-bootstrap'

export default class GetUpdatedPropertyDetails extends React.Component {
  zpid = ''

  constructor(props) {
    super(props)
    this.zpid = this.props.location.pathname.split('/')[2]
  }

  componentWillMount() {
    this.props.fetchGetUpdatedPropertyDetails(this.zpid)
  }

  render() {
    const zillowState = this.props.mappedZillowState
    return (
      <div className="todoDetail">
        <h2>Get Updated Property Details</h2>

        {!zillowState.get_zestimate && zillowState.isFetching && (
          <div>
            <p>Loading Zillow details....</p>
          </div>
        )}
        {zillowState.get_zestimate && !zillowState.isFetching && (
          <div>
            <h2>Property Page View Count</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {zillowState.get_zestimate.pageViewCount.currentMonth[0]}
                  </td>
                  <td>{zillowState.get_zestimate.pageViewCount.total[0]}</td>
                </tr>
              </tbody>
            </Table>

            <br />
            <h2>Address</h2>
            <Table striped bordered hover>
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

            <br />
            <h2>Links</h2>
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

            <br />
            <h2>Home Information</h2>
            <Table striped bordered hover>
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

            <br />
            <h2>Images</h2>

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

            {zillowState.get_zestimate.images.image[0].url.map((image, i) => (
              <img key={i} src={image} />
            ))}
          </div>
        )}
      </div>
    )
  }
}
