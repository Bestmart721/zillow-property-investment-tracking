import React from "react";
import { Table } from 'react-bootstrap';

export default class GetRegionChildren extends React.Component {
  zpid = '';

  constructor(props) {
    super(props);
    this.zpid = this.props.location.pathname.split('/')[2];
  }

  componentWillMount() {
    this.props.fetchGetRegionChildren(this.zpid);
  }

  render() {
    const zillowState = this.props.mappedZillowState;

    return (
      <div className="todoDetail">
        <h2>Get Region Children Detail</h2>
        {/*
        {!zillowState.get_zestimate && zillowState.isFetching && (
          <div>
            <p>Loading Zillow details....</p>
          </div>
        )}
        {zillowState.get_zestimate && !zillowState.isFetching && (
          <div>


          </div>
        )}
        */}
      </div>
    );
  };
};
