/*
 * Serve JSON to our AngularJS client
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.json({
    name: 'MEAN Seed'
  });
});

module.exports = router;
