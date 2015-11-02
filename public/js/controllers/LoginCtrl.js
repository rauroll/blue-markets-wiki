
//angular.module('LoginCtrl', [])
angular.module('bmwApp').controller('LoginController', ['$scope', 'AuthService', function($scope, AuthService) {
	
    console.log(AuthService.getUserStatus());

    $scope.login = function () {

      $scope.error = false;
      $scope.disabled = true;

      AuthService.login($scope.loginForm.username, $scope.loginForm.password)

        .then(function () {
          $location.path('/account');
          $scope.disabled = false;
          $scope.loginForm = {};
          //$scope.apply();
        })

        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Invalid username or password";
          $scope.disabled = false;
          $scope.loginForm = {};
        });

    };
}]).controller('LogoutController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    $scope.user = AuthService.getUserStatus();

    $scope.logout = function () {

      console.log(AuthService.getUserStatus());


      AuthService.logout()
        .then(function () {
          $location.path('/');
        });

    };

}]).controller('RegisterController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    console.log(AuthService.getUserStatus());

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