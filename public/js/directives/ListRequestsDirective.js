angular.module('bmwApp')
.directive('myRequestList', function() {
	return {
		templateUrl: 'templates/myRequestList.html',
		controller: ['$scope', 'DataService', function($scope, DataService) {

			$scope.getRequests = function() {
				DataService.getRequests().then(function(data) {
					console.log("Requests fetched.");
					$scope.requests = data;
				});
			}
			console.log("myRequestList -directive loaded");
			$scope.getRequests();
		}]
	}
})
