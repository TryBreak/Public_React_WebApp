import { Route } from "react-router-dom";
import React, { Component } from "react";
class RouterView extends Component {
  render() {
    const { routes, match } = this.props;
    const path = (match && match.path) || "";
    return routes.map((item, index) => {
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
export default RouterView;
