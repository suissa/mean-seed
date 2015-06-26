var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:module/:template', function(req, res) {
  var module = req.params.module;
  var template = req.params.template;
  res.render(module + '/views/' + template);
});

module.exports = router;
