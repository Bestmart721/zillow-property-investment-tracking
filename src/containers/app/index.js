import React from 'react';
import { Route } from 'react-router-dom';
import { Navbar } from "react-bootstrap";
import Home from '../home';
import GetUpdatedPropertyDetails from '../get-updated-property-details';
import GetDeepComps from '../get-deep-comps';
import GetSearchResults from '../get-search-results';
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
      </Navbar>
    </div>

    <div>
      <main>
        {/*
        <Route exact path="/" component={Login} />
        */}
        <Route exact path="/" component={Home} />

        <Route exact path="/properties/:id" component={Property} />
        <Route exact path="/properties/get-search-results/:query" component={GetSearchResults} />
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
