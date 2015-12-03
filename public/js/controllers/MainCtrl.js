
angular.module('bmwApp').controller('MainController', ['$scope',  'DataService', function($scope, DataService) {
	
		$scope.industryUrls = [
	'http://www.fieldsync.net/files/2113/6460/9808/banner_agriculture.png',
	'https://upload.wikimedia.org/wikipedia/commons/b/b3/Strip_coal_mining.jpg',
	'http://www.inthinc.com/uploads/img/power-lines-1382388868.jpg',
	'http://www.pcrnet.co.uk/imgs/bg.jpg',
	'http://www.spelsberg.co.uk/fileadmin/redaktion/Header/05_Grosshaendlerl.jpg',
	'http://www.icccsit.org/images/traks/12.jpg',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPeKexyNfEFVgq2J70EQcYX98nF3vTvziMPWCAzaxv-YtVY-XbRQ',
	'http://www.cliffordchance.com/content/cliffordchance/expertise/sectors/real_estate/_jcr_content/parCenter/subsectorbody/image.img.jpg/1408543116229.jpg',
	'http://www.ktc-ops.com/wp-content/uploads/2014/03/SCIENCE.jpg',
	'http://imgick.pennlive.com/home/penn-media/pgmain/img/midstate_impact/photo/managementjpg-44bbf16644a0906d.jpg',
	'https://upload.wikimedia.org/wikipedia/commons/4/4b/Landfill_compactor.jpg',
	'http://www.francenter.com/wp-content/uploads/2013/02/120813_08r_crop.jpg',
	'http://www.v-dcpa.com/wp-content/uploads/2014/01/healthcare.jpg',
	'https://prescottollinewsletter.files.wordpress.com/2010/04/orchestra11.jpg',
    'http://in-cyprus.com/wp-content/uploads/2014/07/accommodation.jpg',
	'http://americanfacilityservice.com/files/bigstock/2014/09/Handyman-with-a-tool-belt-Hou-53746066.jpg?w=1060&h=795&a=t',
	'http://images.wisegeek.com/us-capitol-building.jpg'
	];
	$scope.getTopLevelIndustries = function() {
		DataService.getTopLevelIndustries().then(function(data) {
			$scope.industries = data;
		});
	}
	
	$scope.search = function() {
		var keywords = $scope.searchForm.keywords;
		DataService.searchIndustries(keywords).then(function(data) {
			$scope.searchResults = data;
		});
	}

	$scope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
		$scope.searchResults = [];
	})

	$scope.closeResults = function() {
		$scope.searchResults = [];
	}

	$scope.getTopLevelIndustries();

}]);