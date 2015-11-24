
angular.module('bmwApp').controller('SubIndustryController', ['$scope', '$state', '$stateParams', 'DataService', function($scope, $state, $stateParams, DataService) {

	DataService.getIndustry($stateParams.industryCode).then(function(data) {
		$scope.industry = data[0];
		var subs = $scope.industry.subindustryCodes;
		$scope.subIndustries = [];
		for (var i = 0; i < subs.length; i++) {
			DataService.getIndustry(subs[i]).then(function(data) {
				$scope.subIndustries.push(data[0]);
			});
		}
	});
	

}]);