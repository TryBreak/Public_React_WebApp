import React, { Component } from "react";
import { Link } from "react-router-dom";
import routes from "../views/routes";

const route_list_view = () => {
  return routes.map((item, index) => {
    return (
      <div key={item.name}>
        <Link to={item.path}>{item.name}</Link>
      </div>
    );
  });
};
class Inbox extends Component {
  render() {
    return (
      <div>
        {route_list_view()}
        {/* <button onClick={() => this.props.history.push("about")}>
          通过函数跳转
        </button> */}
      </div>
    );
  }
}

export default Inbox;
