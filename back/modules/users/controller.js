var User = require('./model'),
	passport = require('./../../config/passport.js');

module.exports = {
	authenticate: function(req,res,next){
  		 passport.authenticate('local', function(err, user, info) {
		    if (err) {
		    	console.log('error',err);
		    	return next(err);
		    }
		    if (!user) {
		    	console.log(user);
		    	return res.redirect('/auth');
		    }
		    req.logIn(user, function(err) {
		    	if (err) {
		      		return next(err);
		      	}
		      return res.redirect('/dashboard');
		    });
	  	})(req, res, next);
	}

}