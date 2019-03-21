import React, { Component } from "react";
import { Link } from "react-router-dom";
import routes from "./routes";
import RouterView from "../../config/RouterView";

class Demo extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="Demo">
        <h2>Demo</h2>
        <ul>
          <li>
            <Link to="/demo/style_demo">style_demo-a</Link>
          </li>
          <li>
            <Link to="/demo/request_demo">request_demo-a</Link>
          </li>
        </ul>
        <RouterView match={match} routes={routes} />
      </div>
    );
  }
}
export default Demo;
