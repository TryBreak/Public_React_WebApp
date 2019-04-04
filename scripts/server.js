const Koa = require('koa');
const app = new Koa();
const path = require('path');

//静态资源服务器
const static = require('./middleware/static');
app.use(static);

app.listen(3000);
console.log('[demo] start-quick is starting at port 3000');
