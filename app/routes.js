

module.exports = function(router) {

	router.get('*', function(req, res) {
		console.log("Get request to /");
		res.render('index');
	});
	
}
