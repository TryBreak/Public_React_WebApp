import React from "react";

//路由切换
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { HashRouter as Router, Route } from "react-router-dom";
//路由切换 -- end
import routes from "../views/routes";
import Inbox from "../config/Inbox";
const route_list_view = () => {
  return routes.map((item, index) => {
    return (
      <Route
        key={item.name}
        exact
        path={item.path}
        component={item.component}
      />
    );
  });
};
const BaseRouter = () => (
  <Router>
    <Route exact path="/" component={Inbox} />
    {route_list_view()}
  </Router>
);

export default BaseRouter;
