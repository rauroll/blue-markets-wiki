angular.module('bmwApp')
.directive('searchResults', function() {
	console.log("Directive in use!")
	return {
		templateUrl: 'templates/search-results.html'
	}
})
