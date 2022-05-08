var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');
var blogRouter = require('./routes/blog');
var aboutRouter = require('./routes/about');
var registrationRouter = require('./routes/registration');

const UserRoute = require('./routes/User')

const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
  useNewUrlParser : true
}).then(() => {
  console.log("Database connected successfully");
}).catch(err => {
  console.log('Could not connect to the database', err);
  process.exit();
})


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', UserRoute)
app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/blog', blogRouter);
app.use('/about', aboutRouter);
app.use('/registration', registrationRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
