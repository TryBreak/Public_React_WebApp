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
    title: "首页",
    component: _import("/Home")
  },
  {
    path: "/demo",
    name: "Demo",
    title: "演示",
    component: _import("/Demo"),
    children: true
  },
  {
    path: "/404",
    name: "404",
    title: "Not Found",
    component: _import("/NotFound")
  }
];

export default routes;
