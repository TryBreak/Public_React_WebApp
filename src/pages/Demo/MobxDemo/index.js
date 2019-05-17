/*
 * @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-05-05 11:53:31
 * @LastEditTime: 2019-05-17 14:50:15
 */
import React, { Component } from 'react';
import MobxTest1 from './module/MobxTest1';
import MobxTest2 from './module/MobxTest2';
class Demo extends Component {
  render() {
    return (
      <div className="Demo">
        <h2>状态管理演示</h2>
        <MobxTest1 />
        <MobxTest2 />
      </div>
    );
  }
}
export default Demo;
