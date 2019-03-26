# one-react-app 项目说明

脚手架仓库地址 <https://github.com/facebook/create-react-app>

官方文档 <https://facebook.github.io/create-react-app/>

## 运行方式

```bash
#更新和安装依赖
npm install

#本地查看与开发
npm run start

#生产环境打包发布
npm run build
```

## 语法高亮和编辑器配置 `VSCode` 编辑器配置建议

插件安装建议

- ESLint
- ES7 React/Redux
- Prettier
- Path Intellisense

关闭修饰器警告需要在 setting.json 中加入设置:

```json
  "javascript.implicitProjectConfig.experimentalDecorators": true
```

## 定制化

基于 `react-creat-app` 做了如下个性化定制

- 修改 `package.json`中的`browserslist`

- 添加 `.env` 文件来监控端口号和设定环境变量

- 修改 `public\index.html`

  - 新增 meta

- 新增 `react-router-dom` 实现路由跳转

  - 采用配置文件的形式管理路由

- less 配置

  - 开放 `eject` webpack 配置 less , scss , css 的模块化设置 , scss 需要自己安装 node-sass

- eslint 配置

  - 定制了基于团队最优的 eslint 配置

## 状态管理和页面通信

Mobx

文档地址
<https://cn.mobx.js.org/>

## 演示 demo

基础页面建设

主路由渲染规划

子路由渲染规划

多级路由渲染规划

样式演示模块

请求模块

Mobx 状态管理 Demo

## 客户端本地存储

store.js

文档地址
<https://github.com/marcuswestin/store.js>

## 实用工具库

Lodash

文档地址
<https://www.lodashjs.com/>
