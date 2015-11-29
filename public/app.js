var bmwApp = angular.module('bmwApp', ['DataService', 'ErrorCtrl', 'ui.router', 'appRoutes']);

bmwApp.run(function ($rootScope, $state, $location, AuthService) {
	$rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
		console.log($state);
		if (!toState.access)
			$state.go('home');
		if (toState.access.restricted && !AuthService.isLoggedIn()) {
			e.preventDefault();
			$state.go('login');
		}

	});
});