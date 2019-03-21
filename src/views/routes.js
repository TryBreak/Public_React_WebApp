const _import = url => {
  let Template = require("../views" + url);
  if (Template && Template.default) {
    return Template.default;
  } else {
    console.error("页面路由组件引用出现了问题!! -- " + url);
  }
};

const routes = [
  {
    path: "/",
    name: "首页",
    component: _import("/Home")
  },
  {
    path: "/home",
    name: "首页",
    component: _import("/Home")
  },
  {
    path: "/demo",
    name: "Demo",
    component: _import("/Demo"),
    children: true
  }
];

export default routes;
