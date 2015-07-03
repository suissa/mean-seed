
var mongoose = require('mongoose')
  , _schema = {
      name: String,
      members:[{
        _id: String
      ,	name: String
      }]
    }
  ;

module.exports = _schema;