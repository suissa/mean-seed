var Beer = require('../models/beer');
var msg = '';

module.exports = {
  renderList: function(req, res, cb){
    var msg = 'Listagem completa';
    var view = 'beers/list';
    var query = {};
    Beer.find(query, function (err, data) {
      cb(err, data, res, view, msg);
    });
  },
  renderCreate: function(req, res, cb){
    var msg = 'Cadastro de cerveja';
    var view = 'beers/create';
    cb(null, null, res, view, msg);
  },
  renderShow: function(req, res, cb){
    var msg = 'Consulta completa';
    var view = 'beers/show';
    var id = req.params.id;
    var query = {_id: id};
    Beer.findOne(query, function (err, data) {
      cb(err, data, res, view, msg);
    });
  },
  renderEdit: function(req, res, cb){
    var msg = 'Alteração de cerveja';
    var view = 'beers/edit';
    var id = req.params.id;
    var query = {_id: id};
    Beer.findOne(query, function (err, data) {
      cb(err, data, res, view, msg);
    });
  },
  renderRemove: function(req, res, cb){
    var msg = 'Remoção de cerveja';
    var view = 'beers/remove';
    var id = req.params.id;
    var query = {_id: id};
    Beer.findOne(query, function (err, data) {
      cb(err, data, res, view, msg);
    });
  }
};








