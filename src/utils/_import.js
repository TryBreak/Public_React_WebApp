const _import = path => {
  let Template = require('@/views' + path);
  if (Template && Template.default) {
    return Template.default;
  } else {
    console.error('页面路由组件引用出现了问题!! -- ' + path);
  }
};

export default _import;
