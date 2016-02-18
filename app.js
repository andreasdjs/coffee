var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var fs = require('fs');

var coffee = require('./modules/coffee');

var routes = require('./routes/index');
var users = require('./routes/users');
var lista = require('./routes/lista');
var sida = require('./routes/artikelsida');
var add = require('./routes/add');

/* Small coffee object */

var newObject = {
        "id": "7",
          "title": "Espresso No.4",
          "roastery" : "Slöinge",
          "country": "7",
          "producer": "7",
          "brewingMethod": "Espresso, kraftig brygg",
          "about": "Vår traditionella espressoblandning består av ett kaffe från Sertãozinho i Brasilien och ett från Miguel Moreno i Honduras. Den är varsamt rostad för att fortfarande behålla en tydlig karaktär av kaffe. Inga brända smaker och ingen beska. Kaffet från Brasilien står chokladkaraktären och sötman, Miguel Moreno bidrar med en karamellsötma som gifter sig fint med chokladtonen. Mycket lent avslut. Fungerar även mycket bra som vanligt bryggkaffe om man vill ett lite fylligare, mer mörkrostat kaffe."
      };

/* Call function to write coffe object */

coffee.writeNewEntry(newObject);

/* Passing function as a parameter example */ 
/*
function foodemo(value){
  return 'hello '+ value;
}

function funct(a, foo) {
  console.log("\n foo: " + foo(a) + "\n");
}

funct('world!', foodemo); //=> 'hello world!'
*/
/*
So, the second parameter of funct is a reference to another function (in this case foodemo).
Once the function is called, it executes that other function (in this case using the first
parameter as input for it).
*/

/* Get max id value */ 

var newMax = 0;
function setNewMaxId() {
  coffee.getMaxId(function(i){
    console.log("i2: " + i)
    newMax = i + 1;
  });
}

/* Another way to get max id value */

var newMaxId = 0;

function returnValue(i) {
  console.log("i: " + i);
  newMaxId = i + 1;
}

setNewMaxId();
coffee.getMaxId(returnValue);

/* End get max id value */ 

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
app.use('/artikelsida', sida);
app.use('/lista', lista);
app.use('/add', add);

/* Recieve POST data */

app.post('/sent', function(req, res) {
    var name = req.body.name;
//    var newId = coffee.getMaxId();
// console.log("Returned value: " + coffee.getMaxId());
//    coffee.getMaxId();
    var writeNewObject = {
        "id": "8",
          "title": req.body.title,
          "roastery" : req.body.roastery,
          "country": req.body.country,
          "producer": req.body.producer,
          "brewingMethod": req.body.brewingMethod,
          "about": req.body.about
    };

    console.log(writeNewObject);
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
