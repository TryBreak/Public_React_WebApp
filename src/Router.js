import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Inbox from "./Inbox";
import About from "./demo/About";
import Home from "./demo/Home";

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Inbox} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Home" component={Home} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
