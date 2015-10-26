
var router = require('express').Router();


router.get('/', function(req, res) {
	res.render('index');
});

router.get('/templates/:name', function(req, res) {
	var name = req.params.name;
	res.render('templates/' + name);
});

module.exports = router;
