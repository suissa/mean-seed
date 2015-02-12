var Issue = require('../model');
var http = require('http');
var msg = '';

module.exports = {
  create: function (req, res, cb) {
    var data = req.body;
    var model = new Issue(data);
    model.save(function (err, data) {
      cb(err, data, res);
    });
  },
  retrieve: function (req, res, cb) {
    Issue.find({}, function (err, data) {
      cb(err, data, res);
    });
  },
  delete: function (req, res, cb) {
    var id = req.params.id;
    var query = {_id: id}; 
    
    Issue.remove(query, function (err, data) {
      cb(err, data, res);
    });
  },
  listByApplication: function (req, res, cb) {
    var application = req.params.application;
    var query = {application: application};
    
    Issue.findOne(query, function (err, data) {
      cb(err, data, res);
    });
  }
};