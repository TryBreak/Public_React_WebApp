import { ajax } from '../utils/http';
export const userLogin = async data => {
  const req = await ajax({
    url: '/api/passport/login',
    data,
    method: 'post',
  });
  console.log(req);

  return req;
};
export const getBannerList = data => {
  return ajax({
    url: '/api/u/home/banner/list',
    data,
    method: 'get',
  });
};
