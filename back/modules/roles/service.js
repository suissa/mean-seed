(function(){

  var Model = require('./model');

  function create(req, res, cb) {
    var dados = req.body
      , _model = new Model(dados)
      ;

    _model.save(function (err, data) {
      if (err){
        console.log('Error: ', err);
        res.json(err);
      }
      else{
        cb(req, res, data);
      }
    });
  };
  
  function retrieve(req, res, cb) {
    var query = {};
    Model.find(query, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.json(err);
      }
      else{
        cb(req, res, data);
      }
    });
  };
  function get(req, res, cb) {
    console.log('service get');
    var query = {_id: req.params.id} ;
    Model.findOne(query, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.json(err);
      }
      else{
        cb(req, res, data);
      }
    });
  };
  function update(req, res, cb) {

    var query = {_id: req.params.id} 
      , mod = req.body
      , optional = {
          upsert: false,
          multi: false
        }
      ;

    Model.update(query, mod, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.json(err);
      }
      else{
        cb(req, res, data);
      }
    });

  };
  function remove(req, res, cb) {

    var query = {_id: req.params.id} ;
    Model.remove(query, function(err, data) {
      if (err){
        console.log('Erro: ', err);
        res.json(err);
      }
      else{
        cb(req, res, data);
      }
    });

  };

  var Service = {
    create: create
  , retrieve: retrieve
  , get: get
  , update: update
  , remove: remove
  }
  module.exports = Service;
})()
