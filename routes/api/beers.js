var express = require('express');
var router = express.Router();
var _beer = require('../../controllers/api/beers');

var cb = function(err, data, res){
  if (err){
    msg = '{Erro: ' + err +'}' ;
  }
  else{
    msg = data;
  }
  console.log(msg);
  res.json(msg);
}

router.get('/', function(req, res) {
  _beer.retrieve(req, res, cb);
});

router.get('/id/:id', function(req, res) {
  _beer.findOneById(req, res, cb);
});

router.get('/name/:name', function(req, res) {
  _beer.findOneByName(req, res, cb);
});

router.post('/', function(req, res) {
  _beer.create(req, res, cb);
});

router.put('/:id', function(req, res) {
  _beer.update(req, res, cb);
});

router.delete('/:id', function(req, res) {
  _beer.delete(req, res, cb);
});

module.exports = router;





