import React, { Component } from "react";
import { Link } from "react-router-dom";
import RouteView from "../../config/RouteView";

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
        <RouteView match={match} />
      </div>
    );
  }
}
export default Demo;
