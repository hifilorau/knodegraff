// node has no globals so this is how we do dependency injection
var express = require('express'),
    bodyParser = require('body-parser'),
    OAuth = require('OAuth'),
    app = express(),
    Nedb = require('nedb'),
    db = new Nedb();

app.use(bodyParser.json());

  friends = [{
    name: 'Matt',
    gender: 'm'
  }, {
    name: 'Sally',
    gender: 'f'
  }];

app.use(express.static(__dirname + '/src'));
app.use('/dist', express.static(__dirname + '/dist'));


// Add a route, so when you HTTP request GET /api/friends, this route
// will run.
app.get('/api/friends', function(req, res) {
  // req = request(incoming data from the client)
  // res = response(outgoing data to the client)
  res.json(friends);
});

app.post('/api/friends', function(req, res) {
  var friend = {
    name: req.body.name,
    gender: req.body.gender
  };

  db.insert(friend, function(err, friendsRecord) {
    res.json(friendRecord);
  })
});

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address,
      port = server.address().port;


  console.log('GitTracker listening at http://%s:%s', host, port);
});

var twitterKey = 'RjoSCXo6VKhPQnWYBXFEuATQm',
  twitterSecret = 'oLfvRadN9QS46AQceDpoZowtFqx0FEcdUP44p2yJ97ZQPDGYQS',
  token = '37967356-0X8I47EpfiI6NLfc7vZQps2KMCGVmW7HJsNQF6LGI',
  secret = '2CkfVPianU1vYjMUHdV7XhbqCuf1xXvbwKPqBxlPweo9J';

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  twitterKey,
  twitterSecret,
  '1.0A',
  null,
  'HMAC-SHA1'
);

// way to get user tweets by screen name
var username = 'hifilorau';
oauth.get(
  'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=' + username,
  token, //test user token
  secret, //test user secret
  function (e, data, res){
    if (e) console.error(e);
    data = JSON.parse(data);
    console.log(JSON.stringify(data, 0 , 2));
    // console.log(res);
  });
