var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var routes = require('./routes/index');

var app = express();

mongoose.connect('mongodb://localhost/users')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log('Connected to Mongo');
});

//app.use(favicon(path.join(__dirname, '../dist', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, '../dist')));

app.use('/data', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  err.status = 404;
  next(err);
});

module.exports = app;
