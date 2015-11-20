var express = require('express');
var router = express.Router();
var industries = require('../assets/industries.json');



router.get('/industries', function(req, res) {
	return res.send(industries);
});

module.exports = router;