var express = require('express'),
	router = express.Router(),
	_user = require('./controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('./users/views/login');
});

router.post('/',function(req,res,next){
	_user.authenticate(req,res,next);
});

module.exports = router;