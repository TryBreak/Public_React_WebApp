import { ajax } from '../utils/http';
export const userLogin = data => {
  return ajax({
    url: '/api/passport/login',
    data: {
      username: 'asdasd',
      password: '123123',
    },
    method: 'post',
  });
};
