var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  console.log('vaiii');
  res.render('main/views/index');

});

module.exports = router;
