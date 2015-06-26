(function(){

  var Service = require('./service')
    , cb = function(req, res, data) {
        console.log('Success: ', data);
        res.json(data);
      }
    ;
  function create(req, res) {
    Service.create(req, res, cb);
  };
  function retrieve(req, res) {
    Service.retrieve(req, res, cb);
  };
  function get(req, res) {
    console.log('controller get');
    Service.get(req, res, cb);
  };
  function update(req, res) {
    Service.update(req, res, cb);
  };
  function remove(req, res) {
    Service.remove(req, res, cb);
  };

  var Controller = {
    create: create
  , retrieve: retrieve
  , get: get
  , update: update
  , remove: remove
  }
  module.exports = Controller;
})()
