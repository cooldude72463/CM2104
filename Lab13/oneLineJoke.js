var oneLinerJoke = require('one-liner-joke');

var express = require('express');
var app = express();

app.get('/test', function(req, res){
  var randomJoke = oneLinerJoke.getRandomJoke();
  res.end(randomJoke.body);
})

app.listen(8080);
