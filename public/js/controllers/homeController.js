
angular.module('app-angular')
.controller('homeController', ['$scope', function($scope) {

	// initialize table visibility
	$scope.showInfoTable = true;
	$scope.showReserveTable = true;

	// alter infoTable visibility
	$scope.alterShowInfoTable = function() {
		$scope.showInfoTable = !$scope.showInfoTable;
	}

	// alter reserveTable visibility
	$scope.alterShowReserveTable = function() {
		$scope.showReserveTable = !$scope.showReserveTable;
	}

}]);
