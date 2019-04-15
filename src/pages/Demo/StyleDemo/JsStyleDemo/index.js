/*
 * @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-04-08 11:33:38
 * @LastEditTime: 2019-04-15 19:36:38
 */
import React, { Component } from 'react';

class JsStyleDemo extends Component {
  componentDidMount() {
    window.document.title = 'JsStyleDemo';
  }
  render() {
    return (
      <div>
        <h1>这里是 JsStyleDemo ,欢迎光临三级路由 </h1>
      </div>
    );
  }
}

export default JsStyleDemo;
