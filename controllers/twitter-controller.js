var app = require('../app'),
    sync = require('../sync-process');

    app.get('/api/tweets/:username', function (req, res) {
      sync.get(req.params.username, function(tweets){
          res.json(tweets);
      });
    });
