import axios from 'axios';
import Qs from 'qs';
import store from 'store';
let origin = window.location.origin;
let baseUrl = origin; //设置默认 baseUrl 为域名
if (origin.indexOf('localhost') > -1) {
  // baseUrl = origin;
} else if (origin.indexOf('xxxx') > -1) {
  // baseUrl = '';
} else if (origin.indexOf('xxxx') > -1) {
  // baseUrl = '';
}

const service = axios.create();
const $axios_set_default = () => {
  service.defaults.baseURL = baseUrl; //默认请求的 baseUrl
  service.defaults.timeout = 8000; //超时 8 秒
  //请求拦截
  service.interceptors.request.use(
    config => {
      // console.info('请求开始');
      return config;
    },
    error => {
      console.error(error);
      return Promise.reject(error);
    }
  );

  //响应拦截
  service.interceptors.response.use(
    response => {
      // console.info('请求结束');
      return response.data;
    },
    error => {
      return Promise.reject(error);
    }
  );
};
const ajax = param => {
  const config = {
    ...param,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + store.get('token'),
    },
    transformRequest: [
      data => {
        const param = Qs.stringify(data);
        return param;
      },
    ],
  };
  //请求参数转换
  if (config.method === 'get' || !config.method) {
    config.params = config.data;
    delete config.data;
  }
  return service(config);
};
export { $axios_set_default, ajax };
