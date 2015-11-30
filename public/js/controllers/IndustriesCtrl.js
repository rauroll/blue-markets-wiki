
angular.module('bmwApp').controller('IndustriesController', ['$scope',  'DataService', function($scope, DataService) {
	

	DataService.getTopLevelIndustries().then(function(data) {
		$scope.industries = data;
	});

	


}]);