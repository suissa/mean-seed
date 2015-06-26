var mongoose = require('mongoose')
  // , schema = require('./schema')
  , modelName = 'User'
  , collectionName = 'users'
  // , model = new mongoose.model('Level', schema)
  ;


var Schema = mongoose.Schema;

var schema = new Schema(require('./schema'));

var userModel = mongoose.model(modelName, schema, collectionName);

module.exports = userModel;