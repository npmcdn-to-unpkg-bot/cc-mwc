
/**
 * @author Cyrus Sarkosh
 * 
 * @module loginController
 * @desc Provides methods and variables for all pages in the login/ directory.
 */
angular.module('app-angular')
.controller('loginController', ['$http', '$scope', '$window', function($http, $scope, $window) {

	/**
	 * @member {object} user
	 * @desc Holds user login info.
	 */
	$scope.user = {
		username: null,
		password: null
	}

	/**
	 * @function
	 * @name login
	 * @desc Sends user login info to server.
	 */
	$scope.login = function() {
		$http.post('/login', {
			username: $scope.user.username,
			password: $scope.user.password
		}).then(function(successRes) {
			$window.location.reload();
		});
	}

}]);
