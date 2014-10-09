var Brewery = require('../model');
var http = require('http');
var msg = '';

module.exports = {
  create: function(req, res, cb){
    var dados = req.body;
    var model = new Brewery(dados);
    model.save(function (err, data) {
      cb(err, data, res);
    });
  },
  retrieve: function(req, res, cb){
    Brewery.find({}, function (err, data) {
      cb(err, data, res);
    });
  },
  findOneBy_Id: function(req, res, cb){
    var id = req.params.id;
    var query = {_id: id};

    Brewery.findOne(query, function (err, data) {
      cb(err, data, res);
    });
  },
  findOneById: function(req, res, cb){
    var id = req.params.id;
    var query = {id: id};

    Brewery.findOne(query, function (err, data) {
      cb(err, data, res);
    });
  },
  findOneByName: function(req, res, cb){
    var name = req.params.name;
    var query = {name: name};

    Brewery.findOne(query, function (err, data) {
      cb(err, data, res);
    });
  },
  update: function(req, res, cb){
    var id = req.params.id;
    var query = {_id: id}; 
    var mod = req.body;
    delete mod._id;
    Brewery.update(query, mod, function (err, data) {
      cb(err, data, res);
    });
  },
  delete: function(req, res, cb){
    var id = req.params.id;
    var query = {_id: id}; 

    Brewery.remove(query, function(err, data) {
      cb(err, data, res);
    });
  },
  populate: function(req, res, cb){
    var url = 'http://api.openbeerdatabase.com/v1/breweries.json';
    // res.send(url);
    http.get(url, function(response){
      var body = '';
      response.setEncoding('utf8');
      response.on('data', function(chunk){
          body += chunk;
      });
      response.on('end', function () {
        var list = JSON.parse(body).breweries;
        Brewery.create(list, function (err) {
          if (err){
            res.json(err);
          }
          res.json(list);
        });
      });
    });
  }
};








