/*
 * @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-05-05 11:53:31
 * @LastEditTime: 2019-05-17 14:45:55
 */

const _import = (path) => {
  let Template = require(`@/pages${path}`);
  if (Template && Template.default) {
    return Template.default;
  } else {
    console.error(`页面路由组件引用出现了问题!! -- ${path}`);
  }
};

export default _import;
