import React, { Component } from "react";
//路由切换
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { HashRouter as Router, Switch, Route } from "react-router-dom";
//路由切换 -- end
import Inbox from "../config/Inbox"; //页面集合全路由展示
import routes from "../views/routes"; //页面配置文件
import RouteView from "./RouteView"; //路由渲染文件

import { inspect404 } from "../utils/inspectRouter";

class App extends Component {
  componentDidMount() {
    this.watchRouter();
  }
  componentWillUpdate(nextProps) {
    this.watchRouter();
  }
  watchRouter = () => {
    const { pathname } = this.props.history.location;
    if (inspect404({ pathname, routes })) {
    } else {
      this.props.history.replace("/404");
    }
  };
  render() {
    return (
      <Switch>
        <Route exact path="/inbox" component={Inbox} />
        <RouteView routes={routes} />
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
