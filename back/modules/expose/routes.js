var path = require('path');
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/:module/:template', function(req, res) {
  var module = req.params.module;
  var template = req.params.template;
  res.render(module + '/views/' + template);
});

router.get('/:module/:template/html', function(req, res) {
  console.log('entrou');
  var module = req.params.module;
  var template = req.params.template;
  // res.render(module + '/views/' + template);
  res.sendFile(path.join(__dirname, '../../../front/js/modules/'+module+'/views/'+template+'.html'));
});
module.exports = router;
