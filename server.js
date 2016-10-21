var express = require('express');

var port = 3000;

var scores = require('./routes/scores');

var server = express();

server.use(express.static('public'));
server.use('/scores',scores);

server.listen(port, function () {
  console.log('Whackacat listening on '+ port);
});
