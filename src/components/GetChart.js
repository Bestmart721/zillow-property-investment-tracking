import React from 'react'
import { Table } from 'react-bootstrap'

export default class GetChart extends React.Component {
  zpid = ''

  constructor(props) {
    super(props)
    this.zpid = this.props.location.pathname.split('/')[2]
  }

  componentWillMount() {
    this.props.fetchGetChart(this.zpid)
  }

  render() {
    const zillowState = this.props.mappedZillowState

    return (
      <div className="todoDetail">
        <h2>Get Chart Detail</h2>

        {!zillowState.get_zestimate && zillowState.isFetching && (
          <div>
            <p>Loading Zillow details....</p>
          </div>
        )}
        {zillowState.get_zestimate && !zillowState.isFetching && (
          <div>
            <h2>Chart Details</h2>
            <Table striped bordered hover>
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
    )
  }
}
