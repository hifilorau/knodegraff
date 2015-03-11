var http = require('http');

var options = {
  hostname: 'sentiment.vivekn.com',
  port: 80,
  path: '/api/batch/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  }
};


// write data to request body

// way to get user tweets by screen name

var getTweetText = function (tweets) {
  var newQuery = {
    txt: tweets.map(function(tweet) {
      return (tweet.text);
    })
  };
  return JSON.stringify(newQuery);
};

module.exports = {
  getMoods: function (tweets, callback) {
    var req = http.request(options, function(res) {
      console.log('STATUS: ' + res.statusCode);
      console.log('HEADERS: ' + JSON.stringify(res.headers));
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
      });
    });

    req.on('error', function(e) {
      console.log('problem with request: ' + e.message);
    });


    var query = getTweetText(tweets);
    console.log(query);
    // callback(query);
    req.write(query);
    req.end();
  }
};
