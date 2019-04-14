const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api/', {
      target: 'http://192.168.2.29:50051',
      changeOrigin: true,
    })
  );
  app.use(
    proxy('/test/', {
      target: 'http://192.168.2.29:50051',
      changeOrigin: true,
    })
  );
};
