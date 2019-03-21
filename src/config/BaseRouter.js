import React, { Component } from "react";
//路由切换
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { HashRouter as Router, Route } from "react-router-dom";
//路由切换 -- end
import Inbox from "../config/Inbox";

import routes from "../views/routes";
import RouteView from "./RouteView";

class BaseRouter extends Component {
  render() {
    console.log(this.props);
    return (
      <Router>
        <Route exact path="/inbox" component={Inbox} />
        <RouteView routes={routes} />
      </Router>
    );
  }
}
export default BaseRouter;
