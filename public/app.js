var bmwApp = angular.module('bmwApp', ['ngRoute', 'ErrorCtrl', 'appRoutes']);

bmwApp.run(function ($rootScope, $location, $route, AuthService) {
	$rootScope.$on('$routeChangeStart', function (event, next, current) {
		if (!next.access)
			$location.path('/');
		if (next.access.restricted && AuthService.isLoggedIn() === false) {
			$location.path('/login')
			console.log("Access denied.")
		}
	});
});