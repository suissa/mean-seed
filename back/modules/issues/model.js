var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IssueSchema = new Schema({
  hash: { type: String },
  version: { type: String },
  file: { type: String },
  line: { type: Number },
  addrees: { type: String },
  message: { type: String },
  additional: { type: String }
});

module.exports = mongoose.model('Issue', IssueSchema);