angular.module('bmwApp')
.directive('myRequest', function() {
	return {
		templateUrl: 'templates/myRequest.html',
		controller: ['$scope', '$state', 'DataService', function($scope, $state, DataService) {
			$scope.createRequest = function() {
				console.log($scope.requestForm);
				var code = $scope.industry.code;
				var msg = $scope.requestForm.message;
				var type = $scope.requestForm.requestType;
				DataService.createRequest(code, msg, type).then(function(data) {
					console.log("Request created.");
				});
				$scope.requestForm = {};
			}

			$scope.openRequestForm = function() {
				$scope.requestFormOpened = true;
			}
			$scope.closeRequestForm = function() {
				$scope.requestFormOpened = false;
			}

			$scope.setRequestTypeByContext = function($state) {
				var toState = $state.current.name;
				if (toState == 'industries.sub.summary') {
					$scope.requestType = "content";
				} else if (toState == 'industries.sub.experts') {
					$scope.requestType = "expert";
				}
			}
			$scope.setRequestTypeByContext($state);
		}]
	}
})
