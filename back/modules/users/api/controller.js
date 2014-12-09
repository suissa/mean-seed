var session = require('express-session'),
	User = require('../model'),
	passport = require('../../../config/passport.js'),
	bCrypt = require('bcrypt-nodejs');

module.exports = {
	retrieve : function(req,res,cb){
		res.status(501).end();
	},
	create : function(req,res,cb){
		var dados = req.body;
		User.findOne({email: dados.email},function(err,doc){
			if(doc == null){
				bCrypt.hash(dados.password, null, null, function(err, hash) {
					dados.password = hash;
					new User(dados).save(function(err,data){
						console.log(data)
						res.status(201).end();
					})
				});
			}else{
				console.log(err,doc)
				res.status(400).send({message:'Already Existing User'}).end();
			}
		})
	},
	delete : function(req,res,cb){
		res.status(501).end();
	}
}
	






