var mongoose = require('mongoose'), 
_schema = {
  name: String, 
  activity_types: [{ 
  	id: String,
  	name: String
  }] 
};
  
module.exports = _schema;