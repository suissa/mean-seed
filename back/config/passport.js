var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  User = require('../modules/users/model'),
  bCrypt = require('bcrypt-nodejs');

passport.use(new LocalStrategy({
  usernameField:'email',
  passwordField:'password'
},
function(email, password, done) {
  User.findOne({ "email": email }, function(err, user) {
    console.log(user)
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { "message": 'E-mail does not exist in the database.' });
    }
    bCrypt.compare(password,user.password,function(req,res){
      if (res) {
        return done(null, user,{"message" : "login OK"});
      }
      return done(null, false, { "message": 'Wrong password.' });
    })
  });
}
));
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = passport;