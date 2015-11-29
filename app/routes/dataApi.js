var express = require('express');
var router = express.Router();
var industries = require('../assets/industries.json');
var Industry = require('../models/industry.js');



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
})

module.exports = router;
