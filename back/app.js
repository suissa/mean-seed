
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
  db = require('./config/db'),
  http = require('http'),
  path = require('path');

var app = module.exports = express();

var api = {};
api.beers = require('./modules/beers/api/routes');

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
app.use(express.static(path.join(__dirname, '../front')));

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

// JSON API
app.use('/api/beers', api.beers);

// redirect all others to the index (HTML5 history)
app.get('*', function(req, res, next) {
  res.render('main/views/index');
});



module.exports = app;

