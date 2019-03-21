import React, { Component } from "react";
//路由切换
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import { HashRouter as Router, Route } from "react-router-dom";
//路由切换 -- end
import Inbox from "../config/Inbox";

import routes from "../views/routes";
import RouteView from "./RouteView";
import NotFound from "../views/NotFound";

class BaseRouter extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/inbox" component={Inbox} />
        <RouteView routes={routes} />
        <Route exact path="/404" component={NotFound} />
        {/* <Redirect to="/404" /> */}
      </Router>
    );
  }
}
export default BaseRouter;
