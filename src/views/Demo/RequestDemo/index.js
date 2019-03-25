import React, { Component } from 'react';
import { get_searchData } from '../../../api/Demo';
class RequestDemo extends Component {
  getSearch = () => {
    get_searchData({ keyword: '阿松大' });
    console.info('请求~!');
  };
  render() {
    return (
      <div>
        <h1>这里是 RequestDemo ,欢迎光临 这里是二级路由</h1>
        <button onClick={this.getSearch}>GET请求</button>
      </div>
    );
  }
}

export default RequestDemo;
