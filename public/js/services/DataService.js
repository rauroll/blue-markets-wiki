angular.module('DataService', []).factory('DataService', ['$q', '$http', '$timeout', function($q, $http, $timeout) {

	var industryData;

	return ({
		getIndustryData: getIndustryData
	})


	function getIndustryData() {

		var deferred = $q.defer();
		
		console.log("Requesting industry data from the server");

		// For this prototype the data is assumed to not change during a session

		if (!industryData) {
			$http.get('/data/industries')
			.success(function(data) {
				industryData = data;
				deferred.resolve(data);
			})
			.error(function() {
				industryData = undefined;
				deferred.reject();
			})
		} else {
			deferred.resolve(industryData);
		}

		return deferred.promise;
	}


	// 
	function getSubIndustry(code) {

		var deferred = $q.defer();

		getIndustryData().then(function(data) {
			var industries = data.industries;
			for (var i = 0; i < industries.length; i++) {
				if (industries[i].code === code) {
					deferred.resolve(industries[i]);
					return;
				}
			}
			deferred.reject();
		});

		return deferred.promise;
	}

}]);