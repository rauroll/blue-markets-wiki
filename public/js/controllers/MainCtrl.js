
angular.module('bmwApp').controller('MainController', ['$scope',  'DataService', function($scope, DataService) {
	

	$scope.getTopLevelIndustries = function() {
		DataService.getTopLevelIndustries().then(function(data) {
			$scope.industries = data;
		});
	}

	$scope.search = function() {
		var keywords = $scope.searchForm.keywords;
		DataService.searchIndustries(keywords).then(function(data) {
			$scope.searchResults = data;
		});
	}

	$scope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
		$scope.searchResults = [];
	})

	$scope.closeResults = function() {
		$scope.searchResults = [];
	}

	$scope.getTopLevelIndustries();

}]);