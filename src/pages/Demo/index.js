/*
 * @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-05-05 11:53:31
 * @LastEditTime: 2019-05-05 11:53:31
 */
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import RouteView from '@/config/RouteView';
import styles from './index.module.less';

class Demo extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="Demo">
        <h2 className={styles.title}>Demo</h2>
        <ul>
          <li>
            <Link to="/demo/style_demo">style_demo</Link>
          </li>
          <li>
            <Link to="/demo/request_demo">request_demo</Link>
          </li>
          <li>
            <Link to="/demo/mobox_demo">mobox_demo</Link>
          </li>
        </ul>
        <RouteView match={match} />
      </div>
    );
  }
}
export default Demo;
