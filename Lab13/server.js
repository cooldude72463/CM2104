var express = require('express');
var app = express();
var oneLinerJoke = require('one-liner-joke');

app.get('/', function(req, res){
  res.send("Hello world! by express");
})

app.get('/test', function(req, res){
  res.send("This is route 2");
})

app.get('/oneLineJoke', function(req, res){
  var randomJoke = oneLinerJoke.getRandomJoke();
  res.end(randomJoke.body);
})

app.listen(8080);
