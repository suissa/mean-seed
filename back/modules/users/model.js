var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  UserSchema = new Schema({
    email: {type: String},
    password: {type: String, validate : [validatePassword, 'Password don\'t has 8 characters or more']},
    session: {type: String},
    name: {type: String},
    birthday: {type: Date},
    gender: {type: String, default: ''},
    adress: {type: String, default: ''},
    created: {type: Date, default: Date.now},
    updated: {type:Date, default: Date.now}
  });

  User = mongoose.model('User', UserSchema , 'users');
  //validations
  function validatePassword(p){
    return p.length >= 8;
  }

module.exports = User;