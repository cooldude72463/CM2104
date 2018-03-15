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

app.get('/add', function(req, res){
  var x = parseInt(req.query.x);
  var y = parseInt(req.query.y);
  res.send("X + Y="+(x+y));
});

app.get('/calc', function(req, res){
  var x = parseInt(req.query.x);
  var y = parseInt(req.query.y);
  var oper = req.query.oper;
  res.send("X + Y="+(x oper y));
})
app.listen(8080);
