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
  console.log('get --------------');
  _beer.retrieve(req, res, cb);
});

router.get('/populate', function(req, res) {
  _beer.populate(req, res, cb);
});

router.get('/_id/:id', function(req, res) {
  _beer.findOneBy_Id(req, res, cb);
});

router.get('/id/:id', function(req, res) {
  _beer.findOneById(req, res, cb);
});

router.get('/name/:name', function(req, res) {
  _beer.findOneByName(req, res, cb);
});
router.get('/name/:name', function(req, res) {
  _beer.findOneByName(req, res, cb);
});


router.post('/', function(req, res) {
  _beer.create(req, res, cb);
});

router.put('/_id/:id', function(req, res) {
  _beer.update(req, res, cb);
});

router.delete('/_id/:id', function(req, res) {
  _beer.delete(req, res, cb);
});

module.exports = router;





