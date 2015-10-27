angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		$routeProvider

		.when('/', {
			
			templateUrl: 'templates/home.html',
			controller: 'MainController'
		})

		.when('/error', {
			templateUrl: 'templates/error.html',
			controller: 'ErrorController'
		})

		.otherwise(
			{
			redirectoTo: '/'
		});

	$locationProvider.html5Mode(true);	

}]);