import React from "react";

//路由切换
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { HashRouter as Router, Route } from "react-router-dom";
//路由切换 -- end
import routes from "../views/routes";

import Inbox from "../config/Inbox";
import about from "../views/demo/About";
import home from "../views/demo/Home";

console.log(routes);

const BaseRouter = () => (
  <Router>
    <Route exact path="/" component={Inbox} />
    <Route exact path="/about" component={about} />
    <Route exact path="/home" component={home} />
  </Router>
);

export default BaseRouter;
