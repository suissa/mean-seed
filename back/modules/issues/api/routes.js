var express = require('express');
var router = express.Router();
var _issue = require('./controller');

var cb = function (err, data, res) {
  if (err) {
    msg = '{Erro: ' + err +'}';
  } else{
    msg = data;
  }
  console.log(msg);
  res.json(msg);
}

router.get('/', function (req, res) {
  _issue.retrieve(req, res, cb);
});

router.get('/_id/:id', function (req, res) {
  _issue.findOneBy_Id(req, res, cb);
});

router.get('/id/:id', function (req, res) {
  _issue.findOneById(req, res, cb);
});

router.get('/name/:name', function (req, res) {
  _issue.findOneByName(req, res, cb);
});
router.get('/name/:name', function (req, res) {
  _issue.findOneByName(req, res, cb);
});


router.post('/', function (req, res) {
  _issue.create(req, res, cb);
});

router.put('/_id/:id', function (req, res) {
  _issue.update(req, res, cb);
});

router.delete('/_id/:id', function (req, res) {
  _issue.delete(req, res, cb);
});

module.exports = router;





