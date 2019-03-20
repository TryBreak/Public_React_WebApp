import React from "react";

//路由切换
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { HashRouter as Router, Route } from "react-router-dom";
//路由切换 -- end

import Inbox from "../config/Inbox";
import about from "../view/demo/About";
import home from "../view/demo/Home";

const BaseRouter = () => (
  <Router>
    <Route exact path="/" component={Inbox} />
    <Route exact path="/about" component={about} />
    <Route exact path="/home" component={home} />
  </Router>
);

export default BaseRouter;
