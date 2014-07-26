var express = require('express');
var router = express.Router();
var _beer = require('../controllers/beers');

var cb = function(err, data, res, view, message){
  if (err){
    msg = {erro: err,
          msg: 'Erro na listagem'} ;
  }
  else{
    msg = {data: data,
          msg: message};
  }
  console.log(msg);
  res.render(view, msg);
}

router.get('/', function(req, res) {
  _beer.renderList(req, res, cb);
});

router.get('/create', function(req, res) {
  _beer.renderCreate(req, res, cb);
});

router.get('/:id', function(req, res) {
  _beer.renderShow(req, res, cb);
});

router.get('/:id/edit', function(req, res) {
  _beer.renderEdit(req, res, cb);
});

router.get('/:id/remove', function(req, res) {
  _beer.renderRemove(req, res, cb);
});

module.exports = router;





