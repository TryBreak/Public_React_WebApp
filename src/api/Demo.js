import { ajax } from '../utils/http';
export const userLogin = data => {
  return ajax({
    url: '/api/passport/login',
    data,

    method: 'post',
  });
};
