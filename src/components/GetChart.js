import React from 'react';
import { Table, Container } from 'react-bootstrap';


export default class GetChart extends React.Component {
  constructor(props) {
    super(props);
    this.zpid = this.props.location.pathname.split('/')[2];
  }

  componentWillMount() {
    this.props.fetchGetChart(this.zpid);
  }

  render() {
    const zillowState = this.props.mappedZillowState;

    return (
      <Container>
      <div>
        <h1>Chart Info</h1>
        <br />
        {!zillowState.get_zestimate && zillowState.isFetching && (
          <div>
            <p>Loading Zillow details....</p>
          </div>
        )}
        {zillowState.get_zestimate && !zillowState.isFetching && (
          <div>
            <h4>Chart Details</h4>
            <Table striped bordered hover style={{ width: 'auto' }}>
              <thead>
                <tr>
                  <th>URL</th>
                  <th>Graphs and Data</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href={zillowState.get_zestimate.url}>URL</a>
                  </td>
                  <td>
                    <a href={zillowState.get_zestimate.graphsanddata}>Graph</a>
                  </td>
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
