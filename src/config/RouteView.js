import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

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
  render() {
    const { routes, match } = this.props;
    const path = match.path;
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
export default RouteView;
