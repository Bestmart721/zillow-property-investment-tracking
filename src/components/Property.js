import React from 'react'

export default class Property extends React.Component {
  zpid = ''

  get_updated_property_details = ''
  get_deep_comps = ''
  /*
  get_deep_search_results = '';
  get_rate_summary = '';
  get_monthly_payments = '';
  get_demographics = '';
  get_region_children = '';
  get_region_chart = '';
  get_search_results = '';
  */
  get_zestimate = ''
  get_chart = ''
  get_comps = ''

  constructor(props) {
    super(props)
    this.zpid = this.props.location.pathname.split('/')[2]

    this.get_updated_property_details = `/properties/${
      this.zpid
    }/get-updated-property-details`
    this.get_deep_comps = `/properties/${this.zpid}/get-deep-comps`
    /*
    this.get_deep_search_results = `/properties/${this.zpid}/get-deep-search-results`;
    this.get_rate_summary = `/properties/${this.zpid}/get-rate-summary`;
    this.get_monthly_payments = `/properties/${this.zpid}/get-monthly-payments`;
    this.get_demographics = `/properties/${this.zpid}/get-demographics`;
    this.get_region_children = `/properties/${this.zpid}/get-region-children`;
    this.get_region_chart = `/properties/${this.zpid}/get-region-chart`;
    this.get_search_results = `/properties/${this.zpid}/get-search-results`;
    */
    this.get_zestimate = `/properties/${this.zpid}/get-zestimate`
    this.get_chart = `/properties/${this.zpid}/get-chart`
    this.get_comps = `/properties/${this.zpid}/get-comps`
  }

  render() {
    return (
      <div className="todoDetail">
        <h2>Property Detail: {this.zpid}</h2>
        <ul>
          <li>
            <a href={this.get_updated_property_details}>
              Get Updated Property Details
            </a>
          </li>
          <li>
            <a href={this.get_deep_comps}>Get Deep Comps</a>
          </li>
          {/*
          <li><a href={this.get_deep_search_results}>Get Deep Search Results</a></li>
          <li><a href={this.get_rate_summary}>Get Rate Summary</a></li>
          <li><a href={this.get_monthly_payments}>Get Monthly Payments</a></li>
          <li><a href={this.get_demographics}>Get Demographics</a></li>
          <li><a href={this.get_region_children}>Get Region Children</a></li>
          <li><a href={this.get_region_chart}>Get Region Chart</a></li>
          <li><a href={this.get_search_results}>Get Search Results</a></li>
          */}
          <li>
            <a href={this.get_zestimate}>Get Zestimate</a>
          </li>
          <li>
            <a href={this.get_chart}>Get Chart</a>
          </li>
          <li>
            <a href={this.get_comps}>Get Comps</a>
          </li>
        </ul>
      </div>
    )
  }
}
