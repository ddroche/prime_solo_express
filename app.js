var express = require('express');
var path = require('path');
var modOne = require('./modules/modOne');
var modTwo = require('./modules/modTwo');
var modThree = require('./modules/modThree');

var app = express();

app.route('/', function(req, res, next) {

}).get(function(req, res, next) {
  res.sendFile(path.join(__dirname, './static/index.html'));
});

app.route('/balance', function(req, res, next) {

}).get(function(req, res, next) {
  var balance = modThree.balance();
  var money = modThree.money(100, 1000000) + '\n';
  res.send(balance + money);

});

app.use(express.static('static'));

var server = app.listen(3000, function() {
  var host = this.address().address;
  var port = this.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
