import React from "react";
import { Table, Container } from 'react-bootstrap';

export default class GetZestimate extends React.Component {
  zpid = '';

  constructor(props) {
    super(props);
    this.zpid = this.props.location.pathname.split('/')[2];
  }

  componentWillMount() {
    this.props.fetchGetZestimate(this.zpid);
  }

  render() {
    const zillowState = this.props.mappedZillowState;

    return (
      <Container>
      <div className="todoDetail">

        <h1>Zestimate Detail</h1>
        {!zillowState.get_zestimate && zillowState.isFetching && (
          <div>
            <p>Loading Zillow details....</p>
          </div>
        )}
        {zillowState.get_zestimate && !zillowState.isFetching && (
          <div>
            <h5>Address</h5>
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
            <h5>Links</h5>
            <ul>
              <li><a href={zillowState.get_zestimate.links.comparables[0]}>Comps</a></li>
              <li><a href={zillowState.get_zestimate.links.graphsanddata[0]}>Graphs and Data</a></li>
              <li><a href={zillowState.get_zestimate.links.homedetails[0]}>Home Details</a></li>
              <li><a href={zillowState.get_zestimate.links.mapthishome[0]}>Map</a></li>
            </ul>

            {/* <h3>{zillowState.get_zestimate.links.graphsanddata[0]}</h3> */}
            {/* <h3>{zillowState.get_zestimate.links.mapthishome[0]}</h3> */}
            {/* <h3>{zillowState.get_zestimate.links.homedetails[0]}</h3> */}

            <br />
            <h5>Rent Zestimate</h5>
            {/*
            <h3>{zillowState.get_zestimate.rentzestimate.amount[0]._}</h3>
            <h3>{zillowState.get_zestimate.rentzestimate.amount[0]['$'].currency}</h3>
            <h3>{zillowState.get_zestimate.rentzestimate["last-updated"][0]}</h3>
            <h3>{zillowState.get_zestimate.rentzestimate.oneWeekChange[0]._}</h3>
            <h3>{zillowState.get_zestimate.rentzestimate.valueChange[0]._}</h3>
            <h3>{zillowState.get_zestimate.rentzestimate.valueChange[0]['$'].duration}</h3>
            <h3>{zillowState.get_zestimate.rentzestimate.valueChange[0]['$'].currency}</h3>
            */}
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
                    (Number(zillowState.get_zestimate.rentzestimate.amount[0]._))
                    .toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })
                    }/mon
                  </td>
                  <td>{zillowState.get_zestimate.rentzestimate["last-updated"][0]}</td>
                  <td>
                    {
                    (Number(zillowState.get_zestimate.rentzestimate.valueChange[0]._))
                    .toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })
                    }
                  </td>
                  <td>{zillowState.get_zestimate.rentzestimate.valueChange[0]['$'].duration}</td>
                </tr>
              </tbody>
            </Table>

            <br />
            <h5>Zestimate</h5>
            {/*
            <h3>{zillowState.get_zestimate.zestimate.amount[0]._}</h3>
            <h3>{zillowState.get_zestimate.zestimate.amount[0]['$'].currency}</h3>
            <h3>{zillowState.get_zestimate.zestimate["last-updated"][0]}</h3>

            <h3>{zillowState.get_zestimate.zestimate.oneWeekChange[0]._}</h3>
            <h3>{zillowState.get_zestimate.zestimate.oneWeekChange[0]['$'].currency}</h3>

            <h3>{zillowState.get_zestimate.zestimate.valueChange[0]._}</h3>
            <h3>{zillowState.get_zestimate.zestimate.valueChange[0]['$'].currency}</h3>
            <h3>{zillowState.get_zestimate.zestimate.valueChange[0]['$'].duration}</h3>
            <h3>{zillowState.get_zestimate.zestimate.percentile[0]}</h3>
            */}
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
                    (Number(zillowState.get_zestimate.zestimate.amount[0]._))
                    .toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })
                    }
                  </td>
                  <td>{zillowState.get_zestimate.zestimate["last-updated"][0]}</td>
                  <td>
                    {
                    (Number(zillowState.get_zestimate.zestimate.valueChange[0]._))
                    .toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })
                    }
                  </td>
                  <td>{zillowState.get_zestimate.zestimate.valueChange[0]['$'].duration}</td>
                </tr>
              </tbody>
            </Table>

          </div>
        )}

      </div>
      </Container>
    );
  };
};
