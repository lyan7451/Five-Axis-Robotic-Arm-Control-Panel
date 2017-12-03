var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//add library


var index = require('./routes/index');
var users = require('./routes/users');
var axis = require('./routes/axis');
var form = require('./routes/form');
var bluetooth = require('./bluetooth/bluetooth_service');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Connect to Arduino through bluetooth


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
//axis1
app.post('/turnleft1',axis);
app.post('/turnright1',axis);
app.post('/angle1',form);
//axis2
app.post('/up2',axis);
app.post('/down2',axis);
app.post('/angle2',form);
//axis3
app.post('/up3',axis);
app.post('/down3',axis);
app.post('/angle3',form);
//axis4
app.post('/up4',axis);
app.post('/down4',axis);
app.post('/angle4',form);
//axis5
app.post('/Grasp',axis);
app.post('/Loosen',axis);

app.post('/MacroFun',axis);
app.post('/reset',axis)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
