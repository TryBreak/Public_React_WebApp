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
    path: "/about",
    name: "about",
    component: _import("/demo/About.js")
  },
  {
    path: "/home",
    name: "home",
    component: _import("/demo/Home.js")
  },
  {
    path: "/home-index",
    name: "home-index",
    component: _import("/Home")
  }
];

export default routes;
