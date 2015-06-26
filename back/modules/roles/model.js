var mongoose = require('mongoose')
  // , schema = require('./schema')
  , modelName = 'Role'
  , collectionName = 'roles'
  // , model = new mongoose.model('Level', schema)
  ;


var Schema = mongoose.Schema;

var schema = new Schema(require('./schema'));

var rolesModel = mongoose.model(modelName, schema, collectionName);

module.exports = rolesModel;