var express = require('express'),
	router = express.Router(),
	_user = require('./controller');

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

/* GET users listing. */
router.route('/')
	.get(function(req,res,next){
		_user.retrieve(req,res,cb);
	})
	.put(function(req,res,next){
		_user.create(req,res,cb);
	})
	.delete(function(req,res,next){
		_user.delete(req,res,cb);
	})

module.exports = router;