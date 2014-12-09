
/**
 * Module dependencies
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('errorhandler'),
  morgan = require('morgan'),
  routes = require('./modules/main/routes'),
  partials = require('./modules/expose/partials'),
  expose = require('./modules/expose/index'),
  users = require('./modules/users/routes'),
  db = require('./config/db'),
  http = require('http'),
  path = require('path'),
  passport = require('passport'),
  session = require('express-session'),
  uid2 = require('uid2');

var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/modules');
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(session({genid: function(req){return uid2(72);},secret: '123123', resave: true,saveUninitialized: true}));
app.use(express.static(path.join(__dirname, '../front')));
app.use(passport.initialize());
app.use(passport.session());

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
  app.use(errorHandler());
}

// production only
if (env === 'production') {
  // TODO
}


/**
 * Routes
 */

// serve index  
app.use('/', routes);

// server view partials
app.use('/partials', partials);
app.use('/expose', expose);

app.use('/auth', users);


var api = {};
api.beers = require('./modules/beers/api/routes');
api.breweries = require('./modules/breweries/api/routes');
api.users = require('./modules/users/api/routes');

// JSON API
app.use('/api/beers', api.beers);
app.use('/api/breweries', api.breweries);
app.use('/api/users', api.users);

// redirect all others to the index (HTML5 history)
app.get('*', function(req, res, next) {
  res.render('main/views/index');
});



module.exports = app;

