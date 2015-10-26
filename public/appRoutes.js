angular.module('appRoutes', [])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		$routeProvider

		.when('/', {
			templateUrl: 'templates/home',
			controller: 'MainController'
		})

		.when('/error', {
			templateUrl: 'templates/error',
			controller: 'ErrorController'
		})

		.otherwise(
			console.log("Redirecting..."),
			{
			redirectoTo: '/'
		});

		$locationProvider.html5Mode(true);

}])