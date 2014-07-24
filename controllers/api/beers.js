var Beer = require('../../models/beer');
var http = require('http');
var msg = '';

module.exports = {
  create: function(req, res, cb){
    var dados = req.body;
    var model = new Beer(dados);
    model.save(function (err, data) {
      cb(err, data, res);
    });
  },
  retrieve: function(req, res, cb){
    Beer.find({}, function (err, data) {
      cb(err, data, res);
    });
  },
  findOneBy_Id: function(req, res, cb){
    var id = req.params.id;
    var query = {_id: id};

    Beer.findOne(query, function (err, data) {
      cb(err, data, res);
    });
  },
  findOneById: function(req, res, cb){
    var id = req.params.id;
    var query = {id: id};

    Beer.findOne(query, function (err, data) {
      cb(err, data, res);
    });
  },
  findOneByName: function(req, res, cb){
    var name = req.params.name;
    var query = {name: name};

    Beer.findOne(query, function (err, data) {
      cb(err, data, res);
    });
  },
  update: function(req, res, cb){
    var id = req.params.id;
    var query = {_id: id}; 
    var mod = req.body;
    delete mod._id;
    Beer.update(query, mod, function (err, data) {
      cb(err, data, res);
    });
  },
  delete: function(req, res, cb){
    var id = req.params.id;
    var query = {_id: id}; 

    Beer.remove(query, function(err, data) {
      cb(err, data, res);
    });
  },
  populate: function(req, res, cb){
    var url = 'http://api.openbeerdatabase.com/v1/beers.json';
    // res.send(url);
    http.get(url, function(response){
      var body = '';
      response.setEncoding('utf8');
      response.on('data', function(chunk){
          body += chunk;
      });
      response.on('end', function () {
        var list = JSON.parse(body).beers;
        Beer.create(list, function (err) {
          if (err){
            res.json(err);
          }
          res.json(list);
        });
      });
    });
  }
};








