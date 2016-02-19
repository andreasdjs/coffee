var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Include coffee module
var coffee = require('./modules/coffee');

var routes = require('./routes/index');
var users = require('./routes/users');
var list = require('./routes/list');
var product = require('./routes/product');
var add = require('./routes/add');

/* Write initial coffee data file */

coffee.initialWrite();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));


app.use('/', routes);
app.use('/users', users);
app.use('/product', product);
app.use('/list', list);
app.use('/add', add);

/* Recieve POST data */

app.post('/sent', function(req, res) {
    var name = req.body.name;

  function setNewMaxId() {
    coffee.getMaxId(function(i){
      var iString = toString(i);
      var writeNewObject = {
          "id": i,
            "title": req.body.title,
            "roastery" : req.body.roastery,
            "country": req.body.country,
            "producer": req.body.producer,
            "brewingMethod": req.body.brewingMethod,
            "about": req.body.about
      };
      coffee.writeNewEntry(writeNewObject);
    });
  }
  setNewMaxId();
  res.render('add', {
    written: 'Nytt kaffe tillagt'
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
