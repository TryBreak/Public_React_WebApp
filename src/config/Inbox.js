/*
 * @LastEditors: Mark
 * @Description: inbox页面,可用的页面列表
 * @Author: Mark
 * @Date: 2019-05-05 11:53:31
 * @LastEditTime: 2019-05-13 18:27:34
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '@/pages/routes';

console.log(routes);

const Navigation = ({ list }) => {
  console.log(list);

  return (
    <ul>
      {list.map(item => {
        return (
          <li key={item.path}>
            <Link to={item.from + item.path}>{item.name}</Link>
            {item.children && <Navigation list={item.children.routes} />}
          </li>
        );
      })}
    </ul>
  );
};

class Inbox extends Component {
  render() {
    return <Navigation list={routes} />;
  }
}

export default Inbox;
