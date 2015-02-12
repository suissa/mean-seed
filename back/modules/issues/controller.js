var Issue = require('./model');
var msg = '';

module.exports = {
  renderList: function (req, res, cb) {
    var msg = 'Listagem completa';
    var view = 'Issues/list';
    var query = {};
    Issue.find(query, function (err, data) {
      cb(err, data, res, view, msg);
    });
  },
  renderCreate: function (req, res, cb) {
    var msg = 'Cadastro de cerveja';
    var view = 'Issues/create';
    cb(null, null, res, view, msg);
  },
  renderShow: function (req, res, cb) {
    var msg = 'Consulta completa';
    var view = 'Issues/show';
    var id = req.params.id;
    var query = {_id: id};
    Issue.findOne(query, function (err, data) {
      cb(err, data, res, view, msg);
    });
  },
  renderEdit: function (req, res, cb) {
    var msg = 'Alteração de aplicação';
    var view = 'Issues/edit';
    var id = req.params.id;
    var query = {_id: id};
    Issue.findOne(query, function (err, data) {
      cb(err, data, res, view, msg);
    });
  },
  renderRemove: function (req, res, cb) {
    var msg = 'Remoção de aplicação';
    var view = 'Issues/remove';
    var id = req.params.id;
    var query = {_id: id};
    Issue.findOne(query, function (err, data) {
      cb(err, data, res, view, msg);
    });
  }
};








