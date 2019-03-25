import axios from 'axios';

let origin = window.location.origin;
let baseUrl = origin; //设置默认 baseUrl 为域名
if (origin.indexOf('localhost') > -1) {
  // baseUrl = origin;
} else if (origin.indexOf('xxxx') > -1) {
  // baseUrl = '';
} else if (origin.indexOf('xxxx') > -1) {
  // baseUrl = '';
}

const ajax = axios.create();
const $axios_set_default = () => {
  ajax.defaults.baseURL = baseUrl; //默认请求的 baseUrl
  ajax.defaults.timeout = 8000; //超时 8 秒
  ajax.defaults.method = 'post'; //默认 post 请求
  axios.defaults.headers.common['Authorization'] = '123456789'; //设置token

  //请求拦截
  ajax.interceptors.request.use(
    config => {
      console.info('请求开始');
      return config;
    },
    error => {
      console.error(error);
      return Promise.reject(error);
    }
  );

  //响应拦截
  ajax.interceptors.response.use(
    response => {
      console.info('请求结束');
      return response.data;
    },
    error => {
      return Promise.reject(error);
    }
  );
};
export { $axios_set_default, ajax };
