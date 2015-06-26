
var mongoose = require('mongoose'), 
_schema = {
  name: String,
  teams:[{
  	name: String,
  	team_members: [{
  	  id: String,
  	  name: String,
  	  email: String,
  	  phone_number: String
    }],
   	role: {
   	  id: String,
    	 name: String
   	}
  }]
};
  
module.exports = _schema;