
angular.module('bmwApp').controller('SubIndustryController', ['$scope', '$state', '$stateParams', 'DataService', function($scope, $state, $stateParams, DataService) {


	var loadData = function() {

		DataService.getIndustry($stateParams.industryCode).then(function(data) {
			$scope.industry = data[0];

			var subs = $scope.industry.subindustryCodes;
			var parents = $scope.industry.parentindustryCodes;
			
			$scope.subIndustries = [];
			$scope.parents = [];

			for (var i = 0; i < subs.length; i++) {
				DataService.getIndustry(subs[i]).then(function(data) {
					$scope.subIndustries.push(data[0]);
				});
			}

			for (var i = 0; i < parents.length; i++) {
				DataService.getIndustry(parents[i]).then(function(data) {
					$scope.parents.push(data[0]);
				});
			}
		});
	}

	$scope.futureLabels = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];
	$scope.series = ['Series A'];

	$scope.futureData = [
	[6.3, 630, 1260, 2520, 5166, 7140, 8862, 10920, 12642]
	];

	$scope.presentLabels = ['2010', '2011', '2012', '2013', '2014', '2015'];

	$scope.presentData = [
	[6.3, 630, 1260, 2520, 5166, 7140]
	];

	$scope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
		if (toState == 'account') {
			$scope.getRequests();
		}
	})


	loadData();
	

}]);