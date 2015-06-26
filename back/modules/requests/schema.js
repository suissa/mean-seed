var mongoose = require('mongoose'), 
_schema = {
  event_version_id:  String,
  spot_id: String, 
  infra_items: [{
    id: String,
    name: String, 
    quantity: Number,
  }],
  openning_date: Date,
  oppening_team_member: {
    id: String,
    name: String,
    role: String
  },
  reason: String,
  status: { type: String, enum: ['Under approval', 'Approved', 'Reproved'] },
  closing_date: Date,
  closing_team_member: {
    id: String,
    name: String,
    role: String
  }
};
module.exports = _schema;