import { ajax } from '../utils/http';
export const get_searchData = data => {
  return ajax({
    url: '/api/search/all',
    params: data,
    method: 'get',
  });
};
