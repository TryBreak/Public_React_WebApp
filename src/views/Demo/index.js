import React from "react";
import { Link, Route } from "react-router-dom";

import StyleDemo from "./StyleDemo";
import RequestDemo from "./RequestDemo";
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
      <Route exact path="/demo" component={StyleDemo} />
      <Route exact path="/demo/style_demo" component={StyleDemo} />
      <Route exact path="/demo/request_demo" component={RequestDemo} />
    </div>
    // ssssss
  );
}
export default Demo;
