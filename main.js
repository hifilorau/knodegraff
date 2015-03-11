var app = require('./app'),
  requireDir = require('require-dir'),
  bodyParser = require('body-parser'),
  syncProcess = require('./sync-process');

  app.use(bodyParser.json());

  // Require the API controllers
  requireDir('./controllers', { recurse: true });

// Start the server
var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address
      port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
