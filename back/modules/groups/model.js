var mongoose = require('mongoose')
  // , schema = require('./schema')
  , modelName = 'Group'
  , collectionName = 'groups'
  , schema = new mongoose.Schema(require('./schema'))
  ;

module.exports = mongoose.model(modelName, schema, collectionName);