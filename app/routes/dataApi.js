var express = require('express');
var router = express.Router();
var industries = require('../assets/industries.json');
var Industry = require('../models/industry.js');



router.get('/industries', function(req, res) {
	return res.send(industries);
});


router.get('/industry/:code', function(req, res) {
	var code = req.params.code;
	Industry.find({"code": code}, function(err, docs) {
		if (!err) {
			res.json(docs)
		} else {
			res.status(404).send({status: "Not found"});
		}
	}
	if 
	return res.send(ind);
});

module.exports = router;