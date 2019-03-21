import React from "react";
import { Link, Route } from "react-router-dom";

import demo_about from "./demo_about";
import demo_home from "./demo_home";
function Demo() {
  return (
    <div className="Demo">
      <h2>Demo</h2>
      <ul>
        <li>
          <Link to="/demo/demo_about">demo_about-a</Link>
        </li>
        <li>
          <Link to="/demo/demo_home">demo_home-a</Link>
        </li>
      </ul>
      <Route exact path="/demo" render={demo_about} />
      <Route exact path="/demo/demo_about" component={demo_about} />
      <Route exact path="/demo/demo_home" component={demo_home} />
    </div>
    // ssssss
  );
}
export default Demo;
