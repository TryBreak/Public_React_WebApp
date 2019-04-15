/*
 * @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-04-08 11:33:38
 * @LastEditTime: 2019-04-15 19:41:29
 */
export const filter_path = path => {
  return '/' + path.split('/')[1];
};

export const inspect404 = ({ pathname, routes }) => {
  const nowPath = filter_path(pathname);
  const find = routes.find(item => {
    return nowPath === item.path;
  });
  if (nowPath === '/inbox') {
    return true;
  }
  return find;
};

export const inspectRouter = ({ pathname, routes }) => {
  const nowPath = filter_path(pathname);
  const find = routes.find(item => {
    return nowPath === item.path;
  });
  if (nowPath === '/inbox') {
    return true;
  }
  return find;
};
