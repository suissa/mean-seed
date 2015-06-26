var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  console.log('vaiii');
  res.render('main/views/index');

});

router.get('/dashboard', function (req, res){
  res.render('main/views/dashboard');
});

module.exports = router;
