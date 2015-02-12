var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IssueSchema = new Schema({
  hash: { type: String },
  version: { type: String },
  file: { type: String },
  line: { type: Number },
  address: { type: String },
  message: { type: String },
  additional: { type: String },
  application: { type: Schema.Types.ObjectId, ref: 'Application' }
});

module.exports = mongoose.model('Issue', IssueSchema);