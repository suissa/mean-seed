var mongoose = require('mongoose'), 
_schema = {
  event: { 
    id: String,
    name: String
  },
  version: String,
  office: {
    id: String,
    name: String,
  },
  team: {
    id: String,
    name: String 
  },
  team_members: [{
    id: String,
    name: String,
    role: {
      id: String,
      name: String
    } 
  }],
  targets: {
    planning: {
      kick_off: Date,
      team_meeting: Date,
      send: Date,
      approval: Date
    },
    infra_checkin: {
      yellow: Number, //percent to yellow
      orange: Number //percent to orange
    },
    incidents: {
      close: Number, //minutes to close
      yellow: Number, //minutes to yellow
      orange: Number //minutes to orange
    },
    requests: {
      close: Number, //minutes to close
      yellow: Number, //minutes to yellow
      orange: Number //minutes to orange
    }
  },
  places:[{ 
    place: { 
      id: String,
      name: String
    },
    date_begin: Date,
    date_end: Date,
    spots: [{
      name: String,
      capacity: Number,
      dimension: String,
      coordenator: { 
        team_member_id: String,
        team_member_name: String 
      },
      technical: { 
        team_member_id: String,
        team_member_name: String 
      },
      infra_plan: [{
        plan_date: Date,
        begin_hour: Date,
        target_checkin: Date, //director
        infra_items: [{ 
          id: String,
          name: String,
          quantity: Number, 
          supplier: {
            id: String,
            name: String,
            phone: String,
            contact: String
          },
          checkin: {
            checked: Boolean,
            check_date: Date,
            comments: String
          }
        }]
      }]
    }]  
  }],
  workflow: {
    current_status:{
      type: String,
      enum: ['Created', 'On Planning', 'On Tunning', 'Planning Under Approval', 'In Operation' ]
    },
    flows: [{
      flow_date: Date,
      team_member_flow: {
        id: String,
        name: String
      },  
      flow: { 
        type: String, 
        enum: ['Event created', 'Sent for approval', 'Tunning', 'Approved', 'Requested changes' ]
      } 
    }] 
  }
};
module.exports = _schema;