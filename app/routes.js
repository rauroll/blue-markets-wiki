
// var router = require('express').Router();

// module.exports = function(app) {
// 	app.get('/', function(req, res) {
// 		console.log("Get request to /");
// 		res.render('index');
// 	})

// 	.get('/templates/:name', function(req, res) {
// 		var name = req.params.name;
// 		console.log("Get request to /templates/" + name);
// 		res.render('templates/' + name);
// 	})

// 	.get('*', function(req, res) {
// 		console.log("Get request to /");
// 		res.render('index');
// 	});

// }
// module.exports = router;

var jade = require('jade');

module.exports = function(router) {


	router.get('/', function(req, res) {
		console.log("Get request to /");
		res.render('index');
	})

	.get('/templates/:name', function(req, res) {
		var name = req.params.name;
		console.log("Get request to /templates/" + name);
		res.render('templates/' + name);

	})

	.get('*', function(req, res) {
		console.log("Get request to /");
		res.render('index');
	});
}