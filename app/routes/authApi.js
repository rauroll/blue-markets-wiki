var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user.js');




	router.post('/register', function(req, res) {
		User.register(new User({ username: req.body.username }), req.body.password, function(err, account) {
			if (err) {
				return res.status(500).json({err: err});
			}
			passport.authenticate('local')(req, res, function () {
				return res.status(200).json({status: 'You have registered succesfully!'});
			});
		});
	})
	.get('/current-user', function(req, res) {
		if (req.session.passport && req.session.passport.user) {
			User.find({username: req.session.passport.user}, function(err, docs) {
				if (!err) {
					res.json(docs);
				}
				else {
					res.status(404).json({status: 'An error occurred.'});
				}
			});
		} else {
			res.status(401).json({status: 'Unauthorized'});
		}
	})
	.post('/login', function(req, res, next) {
		passport.authenticate('local', function(err, user, info) {
			if (err) {
				return res.status(500).json({err: err});
			}
			if (!user) {
				return res.status(401).json({err: info});
			}
			req.logIn(user, function(err) {
				if (err) {
					return res.status(500).json({err: 'Login failed.'});
				}
				res.status(200).json({status: 'You have been logged in.'});
			});
		})(req, res, next);
	})
	.get('/logout', function(req, res) {
		req.logout();
		res.status(200).json({status: 'You have been logged out.'});
	});
	
module.exports = router;
