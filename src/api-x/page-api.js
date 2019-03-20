import apiRequest from '../utils/apiRequest';

export const getVersionConfig = ({ version }) => {
  return apiRequest('get', '/api/system/version/config', { version });
};
