angular.module('DataService', []).factory('DataService', ['$q', '$http', '$timeout', function($q, $http, $timeout) {


	return ({
		getTopLevelIndustries: getTopLevelIndustries,
		getIndustry: getIndustry,
		searchIndustries: searchIndustries
	});

	var searchResults; // Where the previous search results are stored




	function getTopLevelIndustries() {

		var deferred = $q.defer();

		$http.get('/data/industries_top')
		.success(function(data) {
			deferred.resolve(data);
		})
		.error(function() {
			deferred.reject();
		});

		return deferred.promise;
	}

	function getIndustry(code) {

		var deferred = $q.defer();

		$http.get('/data/industries/' + code)
		.success(function(data) {
			deferred.resolve(data);
		})
		.error(function() {
			deferred.reject();
		});

		return deferred.promise;

	}

	function searchIndustries(keywords) {

		var deferred = $q.defer();

		$http.post('/data/search', {searchString: keywords})
		.success(function(data) {
			deferred.resolve(data);

		})
		.error(function() {
			deferred.reject();
		});

		return deferred.promise;
	}

}]);