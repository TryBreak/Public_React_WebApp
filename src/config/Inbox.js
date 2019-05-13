/*
 * @LastEditors: Mark
 * @Description: inbox页面,可用的页面列表
 * @Author: Mark
 * @Date: 2019-05-05 11:53:31
 * @LastEditTime: 2019-05-13 15:53:17
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '@/pages/routes';

const route_list_view = () => {
  return routes.map((item, index) => {
    return (
      <div key={index}>
        <Link to={item.path}>{item.name}</Link>
      </div>
    );
  });
};

class Inbox extends Component {
  linkTo = () => {
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        {route_list_view()}
        <button onClick={this.linkTo}>函数跳转至首页</button>
      </div>
    );
  }
}

export default Inbox;
