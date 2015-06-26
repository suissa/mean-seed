var mongoose = require('mongoose'), 
_schema = {
  name: String,
  contact: {
  	email: String,
 		phone_number1: String,
  	phone_number2: String,
  	address: String,
  	contact_name: String,
  }
};
  
module.exports = _schema;