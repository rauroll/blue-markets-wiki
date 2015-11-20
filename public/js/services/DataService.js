angular.module('DataService', []).factory('DataService', ['$q', '$http', '$timeout', function($q, $http, $timeout) {

	var industryData;

	return {
		getIndustryData: getIndustryData
	}


	function getIndustryData() {

		var deferred = $q.defer();


		// For this prototype the data is assumed to not change during a session
		
		if (!industryData) {
		$http.get('/data/industries')
			.success(data) {
				industryData = data;
				deferred.resolve(data);
			}
		} else {
			deferred.resolve(industryData);
		}

		return deferred.promise;
	}

}]);