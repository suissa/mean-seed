var mongoose = require('mongoose')
  // , schema = require('./schema')
  , modelName = 'Office'
  , collectionName = 'offices'
  // , model = new mongoose.model('Level', schema)
  ;


var Schema = mongoose.Schema;

var schema = new Schema(require('./schema'));

var officeModel = mongoose.model(modelName, schema, collectionName);

module.exports = officeModel;