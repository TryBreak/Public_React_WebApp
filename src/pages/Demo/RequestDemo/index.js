/*
 * @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-05-05 11:53:31
 * @LastEditTime: 2019-05-17 14:50:08
 */
import React, { Component } from 'react';
import { userLogin, getBannerList, getTestToken } from '@/api/Demo';
class RequestDemo extends Component {
  getSearch = () => {
    userLogin({ username: 'asdasd', password: '123123' });
  };
  getBannerList = () => {
    getBannerList();
  };
  getTestToken = () => {
    getTestToken();
  };
  render() {
    return (
      <div>
        <h1>这里是 RequestDemo ,欢迎光临 这里是二级路由</h1>
        <button onClick={this.getSearch}>post测试</button>
        <br />
        <br />
        <br />
        <button onClick={this.getBannerList}>get测试</button>
        <br />
        <br />
        <br />
        <button onClick={this.getTestToken}>TestToken测试</button>
      </div>
    );
  }
}

export default RequestDemo;
