import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

import Style from "./Style";

class Demo extends Component {
  render() {
    const { match } = this.props;
    console.log(match);
    return (
      <div>
        <h1>demo</h1>
        <ul>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
        <Route path={`${match.path}/:id`} component={Style} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Pleaxxxse select a topic.</h3>}
        />
      </div>
    );
  }
}

export default Demo;
