var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BrewerieSchema = new Schema({
  id: { type: Number, min: 0 },
  name: { type: String, default: '' },
  url: { type: String, default: '' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  beers: [{ type: Schema.Types.ObjectId, ref: 'Beer' }]
});

module.exports = mongoose.model('Brewerie', BrewerieSchema);
