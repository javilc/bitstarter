var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buf = fs.readFileSync('index.html');
buf.toString('utf8',1,5);
app.get('/', function(request, response) {
  response.send('prueba'+buf.toString('utf8',1,5));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
