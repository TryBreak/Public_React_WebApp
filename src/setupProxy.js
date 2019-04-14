const proxy = require('http-proxy-middleware');

const proxyConfig = proxy('/api', {
  target: 'http://192.168.2.29:50051',
});

module.exports = function(app) {
  app.use(proxyConfig);
};
