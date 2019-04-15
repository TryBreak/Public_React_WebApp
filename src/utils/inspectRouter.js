/*
 * @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-04-08 11:33:38
 * @LastEditTime: 2019-04-15 20:54:39
 */
import routes from '@pages/routes';

export const getMainRoute = path => {
  return '/' + path.split('/')[1];
};

export const inspect404 = ({ pathname }) => {
  const nowPath = getMainRoute(pathname);
  const find = routes.find(item => {
    return nowPath === item.path;
  });
  if (nowPath === '/inbox') {
    return true;
  }
  return find;
};

export const recursion = pathArr => {
  const degree = pathArr.length;
  let returnRoutes = routes;
  let count = 0;
  if (degree === 1) {
    return returnRoutes;
  } else {
    find();
    return returnRoutes;
  }
  function find() {
    let path = '/' + pathArr[count];
    for (let i = 0; i < returnRoutes.length; i++) {
      const el = returnRoutes[i];
      if (path === el.path) {
        if (el.children && el.children.routes) {
          returnRoutes = el.children.routes;
        }
      }
    }
    count++;
    if (count < degree) {
      find();
    }
  }
};

export const inspectRouter = ({ pathname, isNowPath }) => {
  const pathArr = pathname.split('/');
  const routeList = recursion(pathArr);

  if (isNowPath) {
    const nowPath = '/' + pathArr[pathArr.length - 1];
    let nowRouter = '';
    //这里待完善
    for (let i = 0; i < routeList.length; i++) {
      const el = routeList[i];
      if (el.path === nowPath) {
        nowRouter = el;
        break;
      }
    }
    return nowRouter;
  } else {
    return routeList;
  }
};
