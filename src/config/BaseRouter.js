import React, { Component } from "react";
//路由切换
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { HashRouter as Router, Route } from "react-router-dom";
//路由切换 -- end
import routes from "../views/routes";
import Inbox from "../config/Inbox";
import RouterView from "./RouterView";

class BaseRouter extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/inbox" component={Inbox} />
        <RouterView routes={routes} />
      </Router>
    );
  }
}
export default BaseRouter;
