import React from 'react';
import { Table, Container } from 'react-bootstrap';

export default class GetComps extends React.Component {
  zpid = '';

  constructor(props) {
    super(props);
    this.zpid = this.props.location.pathname.split('/')[2];
  }

  componentWillMount() {
    this.props.fetchGetComps(this.zpid);
  }

  render() {
    const zillowState = this.props.mappedZillowState;

    return (
      <Container>
      <div className="todoDetail">
        <h1>Comparable Property Info</h1>
        <br />
        {!zillowState.get_zestimate && zillowState.isFetching && (
          <div>
            <p>Loading Zillow details....</p>
          </div>
        )}
        {zillowState.get_zestimate && !zillowState.isFetching && (
          <div>
            <h4>Prinicipal Residence</h4>

            <h5>Address</h5>

            {!zillowState.get_zestimate.properties && (
              <div>Loading address details...</div>
            )}
            {zillowState.get_zestimate.properties && (
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
                  <td>{zillowState.get_zestimate.properties.principal[0]
                        .address[0].street[0]}</td>
                  <td>{zillowState.get_zestimate.properties.principal[0]
                        .address[0].city[0]}</td>
                  <td>{zillowState.get_zestimate.properties.principal[0]
                        .address[0].state[0]}</td>
                  <td>{zillowState.get_zestimate.properties.principal[0]
                        .address[0].zipcode[0]}</td>
                </tr>
              </tbody>
            </Table>
            )}

            <br />
            <h5>Links</h5>

            {!zillowState.get_zestimate.properties && (
              <div>Loading link details...</div>
            )}
            {zillowState.get_zestimate.properties && (
              <ul>
              <li>
                <a
                  href={
                    zillowState.get_zestimate.properties.principal[0].links[0]
                      .comparables[0]
                  }>
                  Comps
                </a>
              </li>
              <li>
                <a
                  href={
                    zillowState.get_zestimate.properties.principal[0].links[0]
                      .graphsanddata[0]
                  }>
                  Graphs and Data
                </a>
              </li>
              <li>
                <a
                  href={
                    zillowState.get_zestimate.properties.principal[0].links[0]
                      .homedetails[0]
                  }>
                  Home Details
                </a>
              </li>
              <li>
                <a
                  href={
                    zillowState.get_zestimate.properties.principal[0].links[0]
                      .mapthishome[0]
                  }>
                  Map
                </a>
              </li>
            </ul>
            )}

            <br />
            <h5>Zestimate</h5>

            {!zillowState.get_zestimate.properties && (
              <div>Loading zestimate details...</div>
            )}
            {zillowState.get_zestimate.properties && (
              <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Last Updated</th>
                  <th>Value Change</th>
                  <th>Value Change Duration (days)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {
                    (Number(zillowState.get_zestimate.properties.principal[0].zestimate[0].amount[0]._))
                    .toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })
                    }
                  </td>
                  <td>
                    {
                      zillowState.get_zestimate.properties.principal[0]
                        .zestimate[0]['last-updated'][0]
                    }
                  </td>
                  <td>
                    {
                    (Number(zillowState.get_zestimate.properties.principal[0]
                      .zestimate[0].valueChange[0]._))
                    .toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })
                    }
                  </td>
                  <td>
                    {
                      zillowState.get_zestimate.properties.principal[0]
                        .zestimate[0].valueChange[0]['$'].duration
                    }
                  </td>
                </tr>
              </tbody>
            </Table>
            )}

            <div>
              <h4>Comparables</h4>

              {!zillowState.get_zestimate.properties && (
                <div>Loading property details...</div>
              )}
              {zillowState.get_zestimate.properties && (
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Address</th>
                      {/*
                      <th>City</th>
                      <th>State</th>
                      <th>Zip</th>
                      */}
                      <th>Amount</th>
                      {/*
                      <th>Last Updated</th>
                      <th>Value Change</th>

                      <th>Value Change Duration (days)</th>
                      <th>Comparables</th>
                      */}
                    </tr>
                  </thead>
                  <tbody>
                    {zillowState.get_zestimate.properties.comparables[0].comp.map(
                      (comp, i) => (
                        <tr key={i}>
                          <td>
                            <a href={comp.links[0].homedetails}>
                              {comp.address[0].street[0]}
                            </a>
                          </td>
                          {/* <td>{comp.address[0].city[0]}</td> */}
                          {/*
                          <td>{comp.address[0].state[0]}</td>
                          <td>{comp.address[0].zipcode[0]}</td>
                          */}
                          <td>
                          {
                          (Number(comp.zestimate[0].amount[0]._))
                          .toLocaleString('en-US', {
                              style: 'currency',
                              currency: 'USD',
                            })
                          }
                          </td>
                          {/*
                          <td>{comp.zestimate[0]["last-updated"][0]}</td>
                          <td>{comp.zestimate[0].valueChange[0]._}</td>
                          */}
                          {/* <td>{comp.zestimate[0].valueChange[0]['$'].duration}</td> */}
                          {/*
                          <td>
                            <ul>
                              <li><a href={comp.links[0].homedetails}>Details</a></li>
                              <li><a href={comp.links[0].mapthishome}>Map</a></li>
                              <li><a href={comp.links[0].comparables}>comps</a></li>
                            </ul>
                          </td>
                          */}
                        </tr>
                      )
                    )}
                  </tbody>
                </Table>
              )}

            </div>
          </div>
        )}
      </div>
      </Container>
    );
  };
};
