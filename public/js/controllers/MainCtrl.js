
angular.module('bmwApp').controller('MainController', ['$scope',  'DataService', function($scope, DataService) {
	

	$scope.search = function() {
		var keywords = $scope.searchForm.keywords;
		DataService.searchIndustries(keywords).then(function(data) {
			$scope.searchResults = data;
		});
	}

}]);