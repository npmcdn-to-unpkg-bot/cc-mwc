
/**
 * @author Cyrus Sarkosh
 * 
 * @module loginController
 * @desc Provides methods and variables for all pages in the login/ directory.
 */
angular.module('app-angular')
.controller('loginController', ['$http', '$rootScope', '$scope', '$state', '$window', 
function($http, $rootScope, $scope, $state, $window) {

	/**
	 * @member {object} user
	 * @desc Holds user login info.
	 */
	$scope.user = {
		username: null,
		password: null
	}

	/**
	 * @member {boolean} loginFailed
	 * @desc Holds whether info if user login failed
	 */
	$scope.loginFailed = $rootScope.loginFailed;

	/**
	 * @function
	 * @name login
	 * @desc Sends login form to server.
	 */
	$scope.login = function() {
		$http.post('/login', {
			username: $scope.user.username,
			password: $scope.user.password
		}).then(function(successRes) {
			$rootScope.loginFailed = false;
			$window.location.reload();
		}, function(failRes) {
			$rootScope.loginFailed = true;
			$state.reload();
		});
	}

}]);
