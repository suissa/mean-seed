var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BeerSchema = new Schema({
  id: { type: Number, min: 0},
  name: { type: String, default: '' },
  description: { type: String, default: '' },
  abv: { type: Number, min: 0},
  category: { type: String, default: ''},
  brewery: { 
    id: { type: Number, min: 0},
    name: { type: String, default: '' }
  }
});

module.exports = mongoose.model('Beer', BeerSchema);


