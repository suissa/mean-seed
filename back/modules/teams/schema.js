var mongoose = require('mongoose'), 
_schema = {
  name: String,
  office: { 
    name: String, 
  } 
};

module.exports = _schema;