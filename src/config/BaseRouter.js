import React, { Component } from "react";
//路由切换
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { HashRouter as Router, Switch, Route } from "react-router-dom";
//路由切换 -- end
import Inbox from "../config/Inbox";
import routes from "../views/routes";
import RouteView from "./RouteView";
import NotFound from "../views/NotFound";

class App extends Component {
  componentDidMount() {
    console.log("首次加载");
  }
  componentWillUpdate(nextProps) {
    console.log("全局的路由监听");
  }
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

class BaseRouter extends Component {
  render() {
    return (
      <Router>
        <Route exact component={App} />
      </Router>
    );
  }
}

export default BaseRouter;
