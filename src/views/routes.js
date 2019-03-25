const _import = url => {
  let Template = require('.' + url);
  if (Template && Template.default) {
    return Template.default;
  } else {
    console.error('页面路由组件引用出现了问题!! -- ' + url);
  }
};

const routes = [
  {
    path: '/',
    name: '首页',
    description: '这里是是首页落地页',
    title: '首页',
    component: _import('/Home'),
  },
  {
    path: '/demo',
    name: 'Demo',
    description: '这里是演示页面',
    title: '演示',
    component: _import('/Demo'),
    children: {
      routes: _import('/Demo/routes'),
    },
  },
  {
    path: '/404',
    name: '404',
    description: '404',
    title: 'Not Found',
    component: _import('/NotFound'),
  },
];

export default routes;
