var mongoose = require('mongoose')
  // , schema = require('./schema')
  , modelName = 'TeamMember'
  , collectionName = 'teamMembers'
  // , model = new mongoose.model('Level', schema)
  ;


var Schema = mongoose.Schema;

var schema = new Schema(require('./schema'));

var teamMemberModel = mongoose.model(modelName, schema, collectionName);

module.exports = teamMemberModel;