var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ApplicationSchema = new Schema({
  id: mongoose.Schema.ObjectId,
  name: { type: String, min: 2, max: 50, unique: true},
});

module.exports = mongoose.model('Application', ApplicationSchema);