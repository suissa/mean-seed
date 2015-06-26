var mongoose = require('mongoose')
  // , schema = require('./schema')
  , modelName = 'EventVersion'
  , collectionName = 'eventsversions'
  // , model = new mongoose.model('Level', schema)
  ;


var Schema = mongoose.Schema;

var schema = new Schema(require('./schema'));

var incidentModel = mongoose.model(modelName, schema, collectionName);

module.exports = incidentModel;