// node has no globals so this is how we do dependency injection
var express = require('express'),
    app = express();

    app.use(express.static(__dirname + '/src'));
    app.use('/dist', express.static(__dirname + '/dist'));

module.exports = app;
