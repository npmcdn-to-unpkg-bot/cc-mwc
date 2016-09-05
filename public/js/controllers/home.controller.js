
/**
 * @author Cyrus Sarkosh
 *
 * @module homeController
 * @desc Provides methods and variables for all pages in admin/ directory.
 */

angular.module('app-angular')
.controller('homeController', ['$scope', function($scope) {

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

}]);
