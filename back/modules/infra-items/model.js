var mongoose = require('mongoose')
  // , schema = require('./schema')
  , modelName = 'InfraItem'
  , collectionName = 'infraItems'
  // , model = new mongoose.model('Level', schema)
  ;


var Schema = mongoose.Schema;

var schema = new Schema(require('./schema'));

var infraItemModel = mongoose.model(modelName, schema, collectionName);

module.exports = infraItemModel;