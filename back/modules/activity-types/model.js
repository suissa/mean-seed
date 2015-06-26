var mongoose = require('mongoose')
  // , schema = require('./schema')
  , modelName = 'ActivityType'
  , collectionName = 'activityTypes'
  // , model = new mongoose.model('Level', schema)
  ;


var Schema = mongoose.Schema;

var schema = new Schema(require('./schema'));

var activityTypeModel = mongoose.model(modelName, schema, collectionName);

module.exports = activityTypeModel;