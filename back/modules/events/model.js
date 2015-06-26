var mongoose = require('mongoose')
  // , schema = require('./schema')
  , modelName = 'Event'
  , collectionName = 'events'
  // , model = new mongoose.model('Level', schema)
  ;


var Schema = mongoose.Schema;

var schema = new Schema(require('./schema'));

var eventModel = mongoose.model(modelName, schema, collectionName);

module.exports = eventModel;