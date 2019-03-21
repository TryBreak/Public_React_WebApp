import React, { Component } from "react";
//路由切换
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { HashRouter as Router, Switch, Route } from "react-router-dom";
//路由切换 -- end
import Inbox from "../config/Inbox"; //页面集合全路由展示
import routes from "../views/routes"; //页面配置文件
import RouteView from "./RouteView"; //路由渲染文件
import NotFound from "../views/NotFound"; //404页面

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
