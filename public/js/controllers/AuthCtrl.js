angular.module('bmwApp').controller('AuthController', ['$scope', '$rootScope', '$location', 'AuthService', function($scope, $rootScope, $location, AuthService) {

	$rootScope.site = "Bluemarkets wiki";

	AuthService.getUserObject().then(function(user) {
		$rootScope.user = user;
	});


	$scope.login = function () {

		$scope.error = false;
		$scope.disabled = true;

		AuthService.login($scope.loginForm.username, $scope.loginForm.password)

		.then(function () {
			$location.path('/account');
			$scope.disabled = false;
			$scope.loginForm = {};
				})

		.catch(function () {
			$scope.error = true;
			$scope.errorMessage = "Invalid username or password";
			$scope.disabled = false;
			$scope.loginForm = {};
		});

	};
	
	$scope.logout = function () {

		AuthService.logout()
		.then(function () {
			$rootScope.user = undefined;
			$location.path('/');
		});

	};

	$scope.register = function () {

		$scope.error = false;
		$scope.disabled = true;

		AuthService.register($scope.registerForm.username, $scope.registerForm.password)

		.then(function () {
			$location.path('/login');
			$scope.disabled = false;
			$scope.registerForm = {};
		})

		.catch(function () {
			$scope.error = true;
			$scope.errorMessage = "Something went wrong!";
			$scope.disabled = false;
			$scope.registerForm = {};
		});

	};

}]);