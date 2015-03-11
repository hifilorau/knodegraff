var OAuth = require('OAuth');

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

module.exports = {
  getTweets: function (username, callback) {
    oauth.get(
      'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=' + username,
      token, //test user token
      secret, //test user secret
      function (e, data, res){
        if (e) console.error(e);
        data = JSON.parse(data);
        callback(data);
      }
    );
  }
};
