var mongoose = require('mongoose'), 
_schema = {
  event_version_id:  String,
  spot_id: String,
  description: String, 
  openning_date: Date,
  openning_team_member: {
    id: String,
    name: String,
    role: String
  },
  actions: String,
  actions_date: Date,
  actions_team_member: {
    id: String,
    name: String,
    role: String
  },
  forecast_date: Date,
  closing_date: Date,
  closing_team_member: {
    id: String,
    name: String,
    role: String
  },
  closing_solution: String
};
  
module.exports = _schema;