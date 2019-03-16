import React from "react";
import { Table } from 'react-bootstrap';

export default class GetMonthlyPayments extends React.Component {
  constructor(props) {
    super(props);
    this.zpid = this.props.location.pathname.split('/')[2];
  }

  componentWillMount() {
    this.props.fetchGetMonthlyPayments(this.zpid);
  }

  render() {
    const zillowState = this.props.mappedZillowState;

    return (
      <div className="">
        <h2>Get Monthly Payments Detail</h2>
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
