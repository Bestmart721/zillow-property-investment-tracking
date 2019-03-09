import React from "react";
import { Table } from 'react-bootstrap';

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
      <div className="todoDetail">

        <h2>Get Zestimate Detail</h2>
        {!zillowState.get_zestimate && zillowState.isFetching && (
          <div>
            <p>Loading Zillow details....</p>
          </div>
        )}
        {zillowState.get_zestimate && !zillowState.isFetching && (
          <div>
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
              <li><a href={zillowState.get_zestimate.links.comparables[0]}>Comps</a></li>
              <li><a href={zillowState.get_zestimate.links.graphsanddata[0]}>Graphs and Data</a></li>
              <li><a href={zillowState.get_zestimate.links.homedetails[0]}>Home Details</a></li>
              <li><a href={zillowState.get_zestimate.links.mapthishome[0]}>Map</a></li>
            </ul>

            {/* <h3>{zillowState.get_zestimate.links.graphsanddata[0]}</h3> */}
            {/* <h3>{zillowState.get_zestimate.links.mapthishome[0]}</h3> */}
            {/* <h3>{zillowState.get_zestimate.links.homedetails[0]}</h3> */}

            <br />
            <h2>Rent Zestimate</h2>
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
                  <td>${zillowState.get_zestimate.rentzestimate.amount[0]._}/mon</td>
                  <td>{zillowState.get_zestimate.rentzestimate["last-updated"][0]}</td>
                  <td>{zillowState.get_zestimate.rentzestimate.valueChange[0]._}</td>
                  <td>{zillowState.get_zestimate.rentzestimate.valueChange[0]['$'].duration}</td>
                </tr>
              </tbody>
            </Table>

            <br />
            <h2>Zestimate</h2>
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
                  <td>${zillowState.get_zestimate.zestimate.amount[0]._}</td>
                  <td>{zillowState.get_zestimate.zestimate["last-updated"][0]}</td>
                  <td>{zillowState.get_zestimate.zestimate.valueChange[0]._}</td>
                  <td>{zillowState.get_zestimate.zestimate.valueChange[0]['$'].duration}</td>
                </tr>
              </tbody>
            </Table>

          </div>
        )}

      </div>
    );
  }
}
