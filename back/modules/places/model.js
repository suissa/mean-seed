var mongoose = require('mongoose')
  // , schema = require('./schema')
  , modelName = 'Place'
  , collectionName = 'places'
  // , model = new mongoose.model('Level', schema)
  ;


var Schema = mongoose.Schema;

var schema = new Schema(require('./schema'));

var placeModel = mongoose.model(modelName, schema, collectionName);

module.exports = placeModel;