// node has no globals so this is how we do dependency injection
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.json());

  friends = [{
    name: 'Matt',
    gender: 'm'
  }, {
    name: 'Sally',
    gender: 'f'
  }];

// Add a route, so when you HTTP request GET /api/friends, this route
// will run.
app.get('/api/friends', function(req, res) {
  // req = request(incoming data from the client)
  // res = response(outgoing data to the client)
  res.json(friends);
});

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address,
      port = server.address().port;


  console.log('GitTracker listening at http://%s:%s', host, port);
});
