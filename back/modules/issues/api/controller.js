var Issue = require('../model');
var http = require('http');
var msg = '';

module.exports = {
  create: function (req, res, cb) {
    var dados = req.body;
    var model = new Issue(dados);
    model.save(function (err, data) {
      cb(err, data, res);
    });
  },
  retrieve: function (req, res, cb) {
    Issue.find({}, function (err, data) {
      cb(err, data, res);
    });
  },
  findOneBy_Id: function (req, res, cb) {
    var id = req.params.id;
    var query = {_id: id};

    Issue.findOne(query, function (err, data) {
      cb(err, data, res);
    });
  },
  findOneById: function (req, res, cb) {
    var id = req.params.id;
    var query = {id: id};

    Issue.findOne(query, function (err, data) {
      cb(err, data, res);
    });
  },
  findOneByName: function (req, res, cb) {
    var name = req.params.name;
    var query = {name: name};

    Issue.findOne(query, function (err, data) {
      cb(err, data, res);
    });
  },
  update: function (req, res, cb) {
    var id = req.params.id;
    var query = {_id: id}; 
    var mod = req.body;
    delete mod._id;
    Issue.update(query, mod, function (err, data) {
      cb(err, data, res);
    });
  },
  delete: function (req, res, cb) {
    var id = req.params.id;
    var query = {_id: id}; 

    Issue.remove(query, function (err, data) {
      cb(err, data, res);
    });
  }
};








