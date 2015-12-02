

angular.module('appRoutes', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {


	$urlRouterProvider.otherwise('home');

	$stateProvider

		// General

		.state('error', {
			url: '/error',
			templateUrl: 'templates/error.html',
			controller: 'ErrorController',
			access: {restricted: false}
		})

		// User

		.state('account', {
			url: '/account',
			templateUrl: 'templates/auth/account.html',
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



		// Industries

		.state('industries', {
			abstract: true,
			url: '/',
			templateUrl: 'templates/industry/industries.html',
			controller: 'MainController',
			access: {restricted: false}
		})
		.state('industries.top', {
			url: '',
			templateUrl: 'templates/industry/industries.top.html',
			access: {restricted: false}
		})
		.state('industries.sub', {
			abstract: true,
			url: 'industry/{industryCode:[0-9]{1,8}}',
			templateUrl: 'templates/industry/industries.sub.html',
			controller: 'SubIndustryController',
			access: {restricted: false}
		})
		.state('industries.sub.summary', {
			url: '',
			templateUrl: 'templates/industry/industries.sub.summary.html',
			access: {restricted: false}
		})
		.state('industries.sub.top-players', {
			url: '/top-players',
			templateUrl: 'templates/industry/industries.sub.top-players.html',
			access: {restricted: false}
		})
		.state('industries.sub.experts', {
			url: '/experts',
			templateUrl: 'templates/industry/industries.sub.experts.html',
			access: {restricted: false}
		})
		.state('industries.sub.reports', {
			url: '/reports',
			templateUrl: 'templates/industry/industries.sub.reports.html',
			access: {restricted: false} // Should this be restricted perhaps?
		})
		.state('industries.sub.future', {
			url: '/future',
			templateUrl: 'templates/industry/industries.sub.future.html',
			access: {restricted: false}
		})



		$locationProvider.html5Mode(true);	

	}]);