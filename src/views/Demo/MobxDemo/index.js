import React, { Component } from 'react';
import Mobx_1 from './Mobx_1';
import Mobx_2 from './Mobx_2';
class Demo extends Component {
  render() {
    return (
      <div className="Demo">
        <h2>状态管理演示</h2>
        <ul>
          <li>
            <Mobx_1 />
          </li>
          <li>
            <Mobx_2 />
          </li>
        </ul>
      </div>
    );
  }
}
export default Demo;
