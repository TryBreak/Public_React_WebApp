import React, { Component } from "react";
import { Link } from "react-router-dom";
import RouteView from "../../../config/RouteView";
class StyleDemo extends Component {
  render() {
    const { match } = this.props;

    return (
      <div>
        <h1>这里是 StyleDemo ,欢迎光临 , 这里是二级路由 </h1>
        <ul>
          <li>
            <Link to="/demo/style_demo/css_style_demo">css_style_demo-a</Link>
          </li>
          <li>
            <Link to="/demo/style_demo/js_style_demo">js_style_demo-a</Link>
          </li>
        </ul>
        <RouteView match={match} />
      </div>
    );
  }
}

export default StyleDemo;
