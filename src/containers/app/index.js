import React from 'react';
import { Route } from 'react-router-dom';

import { Navbar, NavDropdown } from "react-bootstrap";

import Home from '../home';
import GetUpdatedPropertyDetails from '../get-updated-property-details';
import GetDeepComps from '../get-deep-comps';
/*
import GetDeepSearchResults from '../get-deep-search-results';
import GetRateSummary from '../get-rate-summary';
import GetMonthlyPayments from '../get-monthly-payments';
import GetDemographics from '../get-demographics';
import GetRegionChildren from '../get-region-children';
import GetRegionChart from '../get-region-chart';
import GetSearchResults from '../get-search-results';
*/
import GetZestimate from '../get-zestimate';
import GetChart from '../get-chart';
import GetComps from '../get-comps';

import Property from '../property';

const App = () => (
  <div>
    <div>
      <Navbar bg="dark" expand="lg" className="customNav">
        <Navbar.Brand>
          <a href="/">Investment Property Overview</a>
        </Navbar.Brand>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="/properties/248011825">12610 SE 110th Ct</NavDropdown.Item>
            <NavDropdown.Item href="/properties/248011795">12706 SE 110th Ct</NavDropdown.Item>
            <NavDropdown.Item href="/properties/248011788">12740 SE 110th Ct</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/properties/248011766">12021 SE 104th Ct</NavDropdown.Item>
          </NavDropdown>
      </Navbar>
    </div>

    <div>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/properties/:id" component={Property} />
        {/*
        <Route exact path="/properties/:id/get-deep-search-results" component={GetDeepSearchResults} />
        <Route exact path="/properties/:id/get-rate-summary" component={GetRateSummary} />
        <Route exact path="/properties/:id/get-monthly-payments" component={GetMonthlyPayments} />
        <Route exact path="/properties/:id/get-demographics" component={GetDemographics} />
        <Route exact path="/properties/:id/get-region-children" component={GetRegionChildren} />
        <Route exact path="/properties/:id/get-region-chart" component={GetRegionChart} />
        <Route exact path="/properties/:id/get-search-results" component={GetSearchResults} />
        */}
        <Route exact path="/properties/:id/get-updated-property-details" component={GetUpdatedPropertyDetails} />
        <Route exact path="/properties/:id/get-deep-comps" component={GetDeepComps} />
        <Route exact path="/properties/:id/get-zestimate" component={GetZestimate} />
        <Route exact path="/properties/:id/get-chart" component={GetChart} />
        <Route exact path="/properties/:id/get-comps" component={GetComps} />
      </main>
    </div>
  </div>
);

export default App;
