

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		$routeProvider

		.when('/', {
			
			templateUrl: 'templates/home.html',
			controller: 'MainController',
			access: {restricted: false}
		})

		.when('/error', {
			templateUrl: 'templates/error.html',
			controller: 'ErrorController',
			access: {restricted: false}
		})
		.when('/account', {
			templateUrl: 'templates/account.html',
			access: {restricted: true}
		})
		.when('/register', {
			templateUrl: 'templates/auth/register.html',
			controller: 'RegisterController',
			access: {restricted: false}
		})
		.when('/login', {
			templateUrl: 'templates/auth/login.html',
			controller: 'LoginController',
			access: {restricted: false}
		})

		

		.otherwise(
			{
			redirectoTo: '/'
		});

	$locationProvider.html5Mode(true);	

}]);