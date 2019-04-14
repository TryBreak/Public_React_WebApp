const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/rank', {
      target: 'http://192.168.2.29:50051',
    })
  );
};
