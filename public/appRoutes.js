

angular.module('appRoutes', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {


		$urlRouterProvider.otherwise('home');

		$stateProvider

		.state('home', {
			url: '/',
			templateUrl: 'templates/home.html',
			controller: 'AuthController',
			access: {restricted: false}
		})

		.state('error', {
			url: '/error',
			templateUrl: 'templates/error.html',
			controller: 'ErrorController',
			access: {restricted: false}
		})
		.state('account', {
			url: '/account',
			templateUrl: 'templates/account.html',
			controller: 'AuthController',
			access: {restricted: true}
		})
		.state('register', {
			url: '/register',
			templateUrl: 'templates/auth/register.html',
			controller: 'AuthController',
			access: {restricted: false}
		})
		.state('login', {
			url: '/login',
			templateUrl: 'templates/auth/login.html',
			controller: 'AuthController',
			access: {restricted: false}
		})



	$locationProvider.html5Mode(true);	

}]);