
twitter-service
sentiment-service
sync-process

tweets-controller
  // Require app.js and register routes with app
  var app = require('./app');

  app.get('/api/tweets', function (req, res) { });

main // require app.js, controllers, services, sync process, etc
  // Responsible for listening on a port, etc
  // syncProcess.start();

  var app = require('./app'),
    requireDir = require('require-dir'),
    syncProcess = require('./sync-process');

  app.use(bodyParser.json());

  app.use(express.static(__dirname + '/src'));
  app.use('/dist', express.static(__dirname + '/dist'));

  // Require the API controllers
  requireDir('./controllers', { recurse: true });

  // Starting background processes
  syncProcess.start();

  // Start the server
  var server = app.listen(process.env.PORT || 3000, function () {
    var host = server.address().address
        port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
  });


app // defines the express instance used by your entire application (module.exports = app)
  var express = require('express'),
      app = express();

  module.exports = app;
