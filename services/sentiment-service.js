var http = require('http');

var options = {
  hostname: 'www.sentiment140.com',
  port: 80,
  path: '/api/bulkClassifyJson?appid=timhooker@me.com',
  method: 'POST',
  header: {
    'Content-Type': 'application/json'
  }
};


// write data to request body

// way to get user tweets by screen name

var getTweetText = function (tweets) {
  var newQuery = {
    data: tweets.map(function(tweet) {
        return {
          'text': tweet.text,
          'name': tweet.user.name,
          'followers_count': tweet.follower_count,
          'url': tweet.url,
          'geo': tweet.geo,
          'created_at': tweet.created_at,
          'profile_image_url': tweet.profile_image_url
        };
    })
  };

  // console.log(JSON.stringify(newQuery));
  return JSON.stringify(newQuery);
};
module.exports = {
  getMoods: function (tweets, callback) {
    var response;
    var req = http.request(options, function(res) {
      console.log('STATUS: ' + res.statusCode);
      // console.log('HEADERS: ' + JSON.stringify(res.headers));
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
        response = chunk;
      });
    });

    req.on('error', function(e) {
      console.log('problem with request: ' + e.message);
    });


    var query = getTweetText(tweets);
    callback(query);
    req.write(query);
    req.on('finish', function(data){
      console.log('we are done');
    });
    req.end();
  }
};

//
// http://www.sentiment140.com/api/bulkClassifyJson?timhooker@me.com
// http://www.sentiment140.com/api/bulkClassifyJson?timhooker@me.com
