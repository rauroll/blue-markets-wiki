
angular.module('bmwApp').controller('IndustriesController', ['$scope', 'DataService', function($scope, DataService) {
	

	$scope.setSubindustry = function(sub) {
		$scope.currentIndustry = sub;
	}

	DataService.getIndustryData().then(function(data) {
		$scope.industries = data.industries;
	});
}]);