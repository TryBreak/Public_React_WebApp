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

const service = axios.create();
const $axios_set = () => {
  service.defaults.baseURL = baseUrl; //默认请求的 baseUrl
  service.defaults.timeout = 10000; //超时10000
  service.defaults.method = 'get'; //默认git请求
  service.interceptors.request.use(
    config => {
      console.info('请求开始');

      //设置全局的请求状态
      return config;
    },
    error => {
      console.error(error);
      return Promise.reject(error);
    }
  );
  service.interceptors.response.use(
    response => {
      const response_type = filter_responseType(
        response.headers['content-type']
      );
      console.info('请求结束');
      if (response_type === 'excel') {
        return '下载完成';
      } else {
        return response.data;
      }
    },
    error => {
      return Promise.reject(error);
    }
  );

  function filter_responseType(str) {
    let type_str = str.split(';')[0];
    if (type_str === 'application/vnd.ms-excel') {
      return 'excel';
    } else if (type_str === 'text/html') {
      return 'html';
    }
  }
};
export { $axios_set, service };
