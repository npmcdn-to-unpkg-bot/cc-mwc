
/**
 * @author Cyrus Sarkosh
 *
 * @module homeController
 * @desc Provides methods and variables for all pages in admin/ directory.
 */

angular.module('app-angular')
.controller('homeController', ['$http', '$scope', function($http, $scope) {

	/** 
	 * @member {Boolean} showInfoTable 
	 * @desc Tells UI whether to display the info table. 
	 */
	$scope.showInfoTable = true;

	/** 
	 * @member {Boolean} showReserveTable 
	 * @desc Tells UI whether to display the reservation table. 
	 */
	$scope.showReserveTable = true;

	/** 
	 * @function
	 * @name alterShowInfoTable
	 * @desc Flips boolean value of @member showInfoTable
	 */
	$scope.alterShowInfoTable = function() {
		$scope.showInfoTable = !$scope.showInfoTable;
	}

	/** 
	 * @function
	 * @name alterShowReserveTable
	 * @desc Flips boolean value of @member showReserveTable
	 */
	$scope.alterShowReserveTable = function() {
		$scope.showReserveTable = !$scope.showReserveTable;
	}

	/**
	 * @function
	 * @name getReserveTableData
	 * @desc Retrieves reservation table data from server
	 */
	 $http({
	 	method: 'GET',
	 	url: '/api/reservationTable'
	 }).then(function success(res) {
	 	console.log(res);
	 	$scope.reservationData = res.data;
	 }, function fail(res) {
	 	console.log(res);
	 });

}]);
