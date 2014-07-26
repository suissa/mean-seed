var express = require('express');
var router = express.Router();

router.get('/:dir/:name', function(req, res) {
  var dir = req.params.dir;
  var name = req.params.name;
  res.render(dir + '/' + name);
});

module.exports = router;