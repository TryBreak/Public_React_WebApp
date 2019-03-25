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
