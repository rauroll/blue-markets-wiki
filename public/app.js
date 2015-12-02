var bmwApp = angular.module('bmwApp', ['DataService', 'ErrorCtrl', 'chart.js', 'ngAnimate', 'ui.router', 'appRoutes']);

bmwApp.run(function ($rootScope, $state, $location, AuthService) {
	$rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
		if (!toState.access)
			$state.go('industries');
		if (toState.access.restricted && !AuthService.isLoggedIn()) {
			e.preventDefault();
			$state.go('login');
		}

	});
});