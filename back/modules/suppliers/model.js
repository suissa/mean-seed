var mongoose = require('mongoose')
  // , schema = require('./schema')
  , modelName = 'Supplier'
  , collectionName = 'suppliers'
  // , model = new mongoose.model('Level', schema)
  ;


var Schema = mongoose.Schema;

var schema = new Schema(require('./schema'));

var supplierModel = mongoose.model(modelName, schema, collectionName);

module.exports = supplierModel;