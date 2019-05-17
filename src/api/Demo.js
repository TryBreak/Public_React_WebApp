/*
 * @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-05-05 11:53:31
 * @LastEditTime: 2019-05-17 14:53:31
 */
import { ajax } from '@/utils/http';
import store from 'store';

export const userLogin = async (data) => {
  const req = await ajax({
    url: '/api/passport/login',
    data,
    method: 'post',
  });
  store.set('token', req.data.token);
  return req;
};

export const getBannerList = (data) => {
  return ajax({
    url: '/api/u/home/banner/list',
    data,
    method: 'get',
  });
};

export const getTestToken = (data) => {
  return ajax({
    url: '/test/user/token',
    data,
    method: 'get',
  });
};
