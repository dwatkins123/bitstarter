var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var myContent = fs.readFileSync('index.html');
  // response.send('Hello World 2!');
  response.send(myContent);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
