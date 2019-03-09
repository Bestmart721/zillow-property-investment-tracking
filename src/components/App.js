import React from "react";
import { Link } from 'react-router-dom';

import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/properties/248011825">12610 SE 110th Ct</Link></li>
          <li><Link to="/properties/248011795">12706 SE 110th Ct</Link></li>
          <li><Link to="/properties/248011788">12740 SE 110th Ct</Link></li>
          <li><Link to="/properties/248011766">12021 SE 104th Ct</Link></li>
        </ul>
      </div>
    );
  };
};
