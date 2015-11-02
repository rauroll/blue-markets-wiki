var bmwApp = angular.module('bmwApp', ['ngRoute', 'MainCtrl', 'ErrorCtrl', 'appRoutes']);

bmwApp.run(function ($rootScope, $location, $route, AuthService) {
	$rootScope.$on('$routeChangeStart', function (event, next, current) {
		if (next.access.restricted && AuthService.isLoggedIn() === false) {
			$location.path('/')
			console.log("Access denied.")
		}
	})
});