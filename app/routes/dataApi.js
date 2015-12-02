var express = require('express');
var router = express.Router();
var industries = require('../assets/industries.json');
var Industry = require('../models/industry.js');
var Request = require('../models/request.js');



router.get('/industries_top', function(req, res) {
	Industry.find({"level": 1}, function(err, docs) {
		if (!err) {
			res.json(docs)
		} else {
			res.status(404).send({status: "Not found"});
		}
	})
});


router.get('/industries/:code', function(req, res) {
	var code = req.params.code;
	Industry.find({"code": code}, function(err, docs) {
		if (!err) {
			res.json(docs);
		} else {
			res.status(404).send({status: "Not found"});
		}
	});
});


router.post('/search', function(req, res) {
	var query = req.body.searchString;
	Industry.find({name: {$regex: ".*" + query + ".*", $options: "-i"}}, function(err, docs) {
		if (!err) {
			res.json(docs);
		} else {
			res.status(404).send({status: "Not found"});
		}
	})
});

router.post('/requests/new', function(req, res) {
	if (req.session.passport && req.session.passport.user) {
		var user = req.session.passport.user;

		var request = new Request({
			industryCode: req.body.code,
			fulfilled: false,
			message: req.body.msg,
			creator: user,
			type: req.body.type
		});
		request.save(function(err) {
			if (err) console.log("Error, saving the request failed");
		});
		res.status(200).json({status: "A request has been created."});


	} else {
		console.log("Wasn't logged in");
		res.status(401).json({status: "User not authenticated"});
	}
});

router.get('/requests', function(req, res) {
	if (req.session.passport && req.session.passport.user) {
		var user = req.session.passport.user;
		Request.find({creator: user}, function(err, docs) {
			if (!err) {
				res.json(docs);
			} else {
				res.status(404).send({status: "No requests"});
			}
		});
	} else {
		console.log("Wasn't logged in");
		res.status(401).json({status: "user not authenticated"});
	}
});

module.exports = router;
