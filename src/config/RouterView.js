import { Route } from "react-router-dom";
import React, { Component } from "react";
class RouterView extends Component {
  render() {
    console.log(this.props);
    const { routes, match } = this.props;
    return routes.map((item, index) => {
      return (
        <Route
          exact={!item.children}
          key={index}
          path={match.path + item.path}
          component={item.component}
        />
      );
    });
  }
}
export default RouterView;
