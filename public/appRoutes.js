

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		$routeProvider

		.when('/', {
			
			templateUrl: 'templates/home.html',
			controller: 'AuthController',
			access: {restricted: false}
		})

		.when('/error', {
			templateUrl: 'templates/error.html',
			controller: 'ErrorController',
			access: {restricted: false}
		})
		.when('/account', {
			templateUrl: 'templates/account.html',
			controller: 'AuthController',
			access: {restricted: true}
		})
		.when('/register', {
			templateUrl: 'templates/auth/register.html',
			controller: 'AuthController',
			access: {restricted: false}
		})
		.when('/login', {
			templateUrl: 'templates/auth/login.html',
			controller: 'AuthController',
			access: {restricted: false}
		})

		

		.otherwise(
			{
			redirectoTo: '/'
		});

	$locationProvider.html5Mode(true);	

}]);