export const inspect404 = ({ pathname, routes }) => {
  const nowPath = filter_path(pathname);
  const find = routes.find((item, index) => {
    return nowPath === item.path;
  });
  if (nowPath === "/inbox") {
    return true;
  }
  return !!find;
};

export function filter_path(path) {
  return "/" + path.split("/")[1];
}
