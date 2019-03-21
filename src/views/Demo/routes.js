const _import = url => {
  let Template = require("." + url);
  if (Template && Template.default) {
    return Template.default;
  } else {
    console.error("页面路由组件引用出现了问题!! -- " + url);
  }
};

const routes = [
  {
    path: "/style_demo",
    name: "样式演示",
    component: _import("/StyleDemo")
  },
  {
    path: "/request_demo",
    name: "请求演示",
    component: _import("/RequestDemo")
  }
];

export default routes;
