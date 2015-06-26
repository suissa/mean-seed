var mongoose = require('mongoose'), 
_schema = {
  name: String,
  email: String,
  phone_number: String,
  team: { 
  	id: String,
  	name: String
  },
  role: {
    id: String,
    name: String
  }
};
  
module.exports = _schema;