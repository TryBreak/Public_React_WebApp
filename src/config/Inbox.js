/*
 * @LastEditors: Mark
 * @Description: inbox页面,可用的页面列表
 * @Author: Mark
 * @Date: 2019-05-05 11:53:31
 * @LastEditTime: 2019-05-13 18:41:07
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '@/pages/routes';

console.log(routes);

const Navigation = ({ list }) => {
  return (
    <ul>
      {list.map(item => {
        return (
          <li key={item.path}>
            <h3>
              <Link to={item.from + item.path}>{item.name}</Link>
            </h3>
            <h4>title: {item.title}</h4>
            <h4>path: {item.from + item.path}</h4>
            <p>description: {item.description}</p>
            {item.children && <Navigation list={item.children.routes} />}
          </li>
        );
      })}
    </ul>
  );
};

class Inbox extends Component {
  render() {
    return (
      <>
        <h1>该项目路由信息预览</h1>
        <Navigation list={routes} />
      </>
    );
  }
}

export default Inbox;
