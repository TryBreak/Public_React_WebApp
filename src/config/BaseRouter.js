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
  componentWillUpdate() {
    this.watchRouter();
  }
  watchRouter = () => {
    const { pathname } = this.props.history.location;
    const inspectRouter = inspect404({ pathname, routes });
    if (!!inspectRouter) {
    } else {
      this.props.history.replace("/404");
    }
    const title = inspectRouter && inspectRouter.title;
    window.document.title = title || "123";
  };
  render() {
    return (
      <Switch>
        <Route exact path="/inbox" title="123" component={Inbox} />
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
