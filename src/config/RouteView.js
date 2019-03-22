import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import routes from "../views/routes";

//此处用来处理路由和子路由的组件渲染

class RouteView extends Component {
  static propTypes = {
    match: PropTypes.object
  };
  static defaultProps = {
    match: {
      path: ""
    }
  };
  findRoutes = () => {
    //第一遍循环查找一层,第二遍循环查找二层,第三遍循环查找三层
    const { match } = this.props;
    const pathArr = match.path.split("/");

    console.log(pathArr);

    const routeList = this.recursion(pathArr);
    // console.log("routeList", routeList);
    return routeList;
  };
  recursion = pathArr => {
    const degree = pathArr.length;
    let returnRoutes = routes;
    let count = 0;
    if (degree === 1) {
      return returnRoutes;
    } else {
      find();
      return returnRoutes;
    }
    function find() {
      let path = "/" + pathArr[count];
      // console.log(1111111111111);
      // console.log(path);
      // console.log(count);
      // console.log(returnRoutes);
      // console.log(111111111111);
      for (let i = 0; i < returnRoutes.length; i++) {
        const el = returnRoutes[i];
        if (path === el.path) {
          if (el.children && el.children.routes) {
            returnRoutes = el.children.routes;
          }
        }
      }
      count++;
      if (count < degree) {
        find();
      }
    }
  };
  render() {
    const { match } = this.props;
    let routeList = this.findRoutes();
    const path = match.path;
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
