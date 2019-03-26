import React, { Component } from 'react';
import _ from 'lodash';

console.info(_.defaults({ a: 1 }, { a: 3, b: 2 }));

class JsStyleDemo extends Component {
  render() {
    return (
      <div>
        <h1>这里是 JsStyleDemo ,欢迎光临三级路由 </h1>
      </div>
    );
  }
}

export default JsStyleDemo;
