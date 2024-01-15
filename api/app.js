const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const favicon = require('serve-favicon');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Configurations
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Error Handling
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { message: err.message, status: err.status, stackTrace: err.stack});
});

let port = process.env.PORT;
if (!port || port == '') port = '8000';

app.listen(port, function() {
  console.log(`Project Sphynx API listening at http://localhost:${port}`);
});

module.exports = app;
