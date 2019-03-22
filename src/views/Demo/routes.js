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
    description: "样式演示demo",
    title: "二级路由-样式演示",
    component: _import("/StyleDemo"),
    children: {
      routes: _import("/StyleDemo/routes")
    }
  },
  {
    path: "/request_demo",
    name: "请求演示",
    description: "请求演示demo",
    title: "二级路由-请求演示",
    component: _import("/RequestDemo")
  }
];

export default routes;
