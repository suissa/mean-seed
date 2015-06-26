var db = require('./config/db');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var api = {};
api.groups = require('./modules/groups/routes/api');
api.users  = require('./modules/users/routes/api');

var app = express();

app.use('/js', express.static(__dirname + '/../front'));
// app.use('/dist', express.static(__dirname + '/../dist'));
app.use('/css', express.static(__dirname + '/../front/styles'));
app.use('/styles', express.static(__dirname + '/../front/styles'));
app.use('/bower_components', express.static(__dirname + '/../front/bower_components'));

// app.all('/*', function(req, res, next) {
//     // Just send the index.html for other files to support HTML5Mode
//     res.sendFile('index.html', { root: __dirname });
// });

// view engine setup
app.set('views', path.join(__dirname, '/modules'));
// app.set('_config', path.join(__dirname,'/config'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// Esse eh o Front
app.use(express.static(path.join(__dirname, './../front')));

var routes = require('./modules/main/routes');
var expose = require('./modules/expose/routes');
app.use('/', routes);
app.use('/expose', expose);

app.use('/api/groups', api.groups);
app.use('/api/users', api.users);

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
        res.render('main/views/error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('main/views/error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
