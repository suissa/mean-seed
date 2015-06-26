var mongoose = require('mongoose')
  // , schema = require('./schema')
  , modelName = 'Request'
  , collectionName = 'requests'
  // , model = new mongoose.model('Level', schema)
  ;


var Schema = mongoose.Schema;

var schema = new Schema(require('./schema'));

var requestModel = mongoose.model(modelName, schema, collectionName);

module.exports = requestModel;