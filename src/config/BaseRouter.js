import React, { Component } from "react";
//路由切换
import { BrowserRouter as Switch, Route } from "react-router-dom";
// import { HashRouter as Switch, Route } from "react-router-dom";
//路由切换 -- end
import Inbox from "../config/Inbox";

import routes from "../views/routes";
import RouteView from "./RouteView";
import NotFound from "../views/NotFound";

class BaseRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/inbox" component={Inbox} />
        <RouteView routes={routes} />
        <Route exact path="/404" component={NotFound} />
      </Switch>
    );
  }
}
export default BaseRouter;
