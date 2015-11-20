angular.module('bmwApp').factory('AuthService',
	['$q', '$timeout', '$http',
	function ($q, $timeout, $http) {

		var userStatus = null;
		var user;

		return ({
			isLoggedIn: isLoggedIn,
			getUserStatus: getUserStatus,
			login: login,
			logout: logout,
			register: register,
			getUserObject: getUserObject
		});

		function getUserObject() {
			
			var deferred = $q.defer();
			if (user) {
				deferred.resolve(user);
			} else {
				$http.get('/user/current-user')
					.success(function(data, status) {
						userStatus = true;
						user = data[0];
						deferred.resolve(user);
					})
					.error(function(data) {
						user = undefined;
						deferred.reject();
					});
			}
			return deferred.promise;
		}

		function isLoggedIn() {
				return !!userStatus
		}

		function getUserStatus() {
			return userStatus;
		}

		function login(username, password) {

			var deferred = $q.defer();

			$http.post('/user/login', {username: username, password: password})
				.success(function (data, status) {
					if(status === 200 && data.status){
						userStatus = true;
						deferred.resolve();
					} else {
						userStatus = false;
						deferred.reject();
					}
				})
				.error(function (data) {
					userStatus = false;
					deferred.reject();
				});

			return deferred.promise;

		}

		function logout() {

			var deferred = $q.defer();

			$http.get('/user/logout')
				.success(function (data) {
					userStatus = false;
					user = undefined;
					deferred.resolve();
				})
				.error(function (data) {
					userStatus = false;
					deferred.reject();
				});

			return deferred.promise;

		}

		function register(username, password) {

			var deferred = $q.defer();

			$http.post('/user/register', {username: username, password: password})
				.success(function (data, status) {
					if(status === 200 && data.status){
						deferred.resolve();
					} else {
						deferred.reject();
					}
				})
				.error(function (data) {
					deferred.reject();
				});

			return deferred.promise;

		}

}]);