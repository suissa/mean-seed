var express = require('express')
  , router = express.Router()
  , Controller = require('./../controller')
  , Routes = require('./../../routes')
  ;

var cbCreate = function(req, res) {
    Controller.create(req, res);
  }
  , cbRetrieve = function(req, res) {
      Controller.retrieve(req, res);
  }
  , cbGet = function(req, res) {
      Controller.get(req, res);
  }
  , cbUpdate = function(req, res) {
      Controller.update(req, res);
  }
  , cbDelete = function(req, res) {
      Controller.remove(req, res);
  }
  ;

var routes = [{
      action: 'create'
    , method: 'post'
    , url: '/'
    , callback: cbCreate
    }
  , {
      action: 'retrieve'
    , method: 'get'
    , url: '/'
    , callback: cbRetrieve
  }
  , {
      action: 'get'
    , method: 'get'
    , url: '/:id'
    , callback: cbGet
  }
  , {
      action: 'update'
    , method: 'put'
    , url: '/:id'
    , callback: cbUpdate
  }
  , {
      action: 'delete'
    , method: 'delete'
    , url: '/:id'
    , callback: cbDelete
  }
];

Routes.createModuleRoutes(router, routes);

module.exports = router;
