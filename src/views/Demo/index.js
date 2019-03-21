import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import routes from "./routes";

console.log(routes);

const route_list_view = () => {
  return routes.map((item, index) => {
    return (
      <Route exact key={index} path={item.path} component={item.component} />
    );
  });
};

class Demo extends Component {
  render() {
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
        {route_list_view()}
      </div>
    );
  }
}
export default Demo;
