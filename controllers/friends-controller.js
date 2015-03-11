var app = require('../app'),
    db = require('../data/db');

app.get('/api/friends', function(req, res) {
  // req = request(incoming data from the client)
  // res = response(outgoing data to the client)
  db.find({}, function(err, friends) {
    res.json(friends);
  });
});

app.post('/api/friends', function (req, res) {
 var friend = {
   name: req.body.name,
   gender: req.body.gender
 };

 db.insert(friend, function (err, friendRecord) {
   if (err) {
     console.log(err);
     res.status(500).json(err);
   } else {
     res.json(friendRecord);
   }
 });
});
