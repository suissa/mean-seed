var express = require('express');
var router = express.Router();
var _brewery = require('./controller');

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
	_brewery.retrieve(req, res, cb);
});

router.get('/populate', function(req, res) {
	_brewery.populate(req, res, cb);
});

router.get('/_id/:id', function(req, res) {
	_brewery.findOneBy_Id(req, res, cb);
});

router.get('/id/:id', function(req, res) {
	_brewery.findOneById(req, res, cb);
});

router.get('/name/:name', function(req, res) {
	_brewery.findOneByName(req, res, cb);
});

router.get('/name/:name', function(req, res) {
	_brewery.findOneByName(req, res, cb);
});

router.post('/', function(req, res) {
	_brewery.create(req, res, cb);
});

router.put('/_id/:id', function(req, res) {
	_brewery.update(req, res, cb);
});

router.delete('/_id/:id', function(req, res) {
	_brewery.delete(req, res, cb);
});

module.exports = router;





