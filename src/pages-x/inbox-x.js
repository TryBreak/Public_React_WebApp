import React, { Component } from "react";
import { Link } from "react-router-dom";
class Inbox extends Component {
  render() {
    return (
      <div>
        <Link to="/about">About</Link>
        <br />
        <Link to="/home">Home</Link>
        <br />
        <button onClick={() => this.props.history.push("About")}>
          通过函数跳转
        </button>
        <br />
      </div>
    );
  }
}

export default Inbox;
