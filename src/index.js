import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "react-app-polyfill/ie9";

import { BrowserRouter, Route, Link } from "react-router-dom";

console.log(BrowserRouter);
console.log(Route);
console.log(Link);

// import About from "./demo/About";
// import Inbox from "./demo/Inbox";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
