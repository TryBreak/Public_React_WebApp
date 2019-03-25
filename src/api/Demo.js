import { service } from '../utils/http';
export const get_searchData = data => {
  return service({
    url: '/api/search/all',
    data,
  });
};
