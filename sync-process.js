var twitterService = require('./services/twitter-service'),
    sentimentService = require('./services/sentiment-service'),
    db = require('./data/db');

var processTweets = function(tweets, sentiments) {
  tweets.forEach(function(tweet, index) {
    tweet.mood = sentiments[index].result.sentiment;
  });
  db.insert(tweets, function(err, twitterRecord) {
    if (err) {
      rest.status(400).json({message: 'oh monkies' });
    } else {
      res.json(twitterRecord);
    }
  });
  return tweets;
};

module.exports = {
  get: function(username, callback) {
    twitterService.getTweets(username, function(tweets) {
      sentimentService.getMoods(tweets, function(res){
        // var data = processTweets(tweets, res);
        callback(res);
      });
    });
  }
}
