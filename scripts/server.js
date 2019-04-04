const static = require('koa-static');
const Koa = require('koa');
const app = new Koa();

const staticPath = '../build';

app.use(static(path.join(__dirname, staticPath)));
app.listen(3000);

app.listen(3380, '0.0.0.0', () => {
  console.log('server is starting at port 2333');
  console.log('服务已经启动,请在浏览器中输入 http://localhost:2333 ');
});
