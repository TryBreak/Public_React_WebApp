import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import routes from "../views/routes";

//此处用来处理路由和子路由的组件渲染

class RouteView extends Component {
  static propTypes = {
    match: PropTypes.object,
    routes: PropTypes.array
  };
  static defaultProps = {
    match: {
      path: ""
    }
  };
  findRoutes = () => {
    const { match } = this.props;
    const find = routes.find(item => {
      return match.path === item.path;
    });
    if (find && find.children) {
      return find.children.routes;
    }
  };
  render() {
    const { match } = this.props;
    console.log(match);

    let routeList = routes;
    const path = match.path;
    if (path) {
      routeList = this.findRoutes();
    }
    return routeList.map((item, index) => {
      return (
        <Route
          exact={!item.children}
          key={index}
          path={path + item.path}
          component={item.component}
        />
      );
    });
  }
}
export default RouteView;
