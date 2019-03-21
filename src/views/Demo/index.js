import React from "react";
import { Link, Route } from "react-router-dom";

import routes from "./routes";

const route_list_view = () => {
  return routes.map((item, index) => {
    return <Route key={index} path={item.path} component={item.component} />;
  });
};

function Demo() {
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
      {/* <Route exact path="/demo" component={StyleDemo} />
      <Route exact path="/demo/style_demo" component={StyleDemo} />
      <Route exact path="/demo/request_demo" component={RequestDemo} /> */}
    </div>
    // ssssss
  );
}
export default Demo;
