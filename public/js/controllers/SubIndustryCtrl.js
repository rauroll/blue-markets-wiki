
angular.module('bmwApp').controller('SubIndustryController', ['$scope', '$state', '$stateParams', 'DataService', function($scope, $state, $stateParams, DataService) {
	


	DataService.getIndustryData().then(function(data) {
		$scope.subIndustry = data
	});
	
	
}]);