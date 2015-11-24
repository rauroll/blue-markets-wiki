

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


		// Industries

		.state('industries', {
			abstract: true,
			url: '/industries',
			templateUrl: 'templates/industries.html',
			controller: 'IndustriesController',
			// resolve: {
			// 	industries: ['DataService',
			// 		function(DataService) {
			// 			DataService.getIndustryData()
			// 		}]
			// },
			access: {restricted: false}
		})
		.state('industries.top', {
			url: '',
			templateUrl: 'templates/industries.top.html',
			access: {restricted: false}
		})
		.state('industries.sub', {
			url: '/{code:[0-9]}',
			templateUrl: 'templates/industries.sub.html',
			controller: 'SubIndustryController',
			acces: {restricted: false}
		})



	$locationProvider.html5Mode(true);	

}]);