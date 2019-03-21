import React, { Component } from "react";
class StyleDemo extends Component {
  render() {
    const { match } = this.props;
    console.log(match);

    return (
      <div>
        <h1>这里是 StyleDemo ,欢迎光临 </h1>
      </div>
    );
  }
}

export default StyleDemo;
