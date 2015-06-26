var mongoose = require('mongoose')
  // , schema = require('./schema')
  , modelName = 'Team'
  , collectionName = 'teams'
  // , model = new mongoose.model('Level', schema)
  ;


var Schema = mongoose.Schema;

var schema = new Schema(require('./schema'));

var teamModel = mongoose.model(modelName, schema, collectionName);

module.exports = teamModel;