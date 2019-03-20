import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { HashRouter as Router, Route } from "react-router-dom";

import Inbox from "../Inbox";
import about from "../pages/demo/about-x";
import home from "../pages/demo/home-x";

const Route = () => (
  <Router>
    <Route exact path="/" component={Inbox.default} />
    <Route exact path="/about" component={about} />
    <Route exact path="/home" component={home} />
  </Router>
);

export default Route;
