
/**
 * @requires $routeProvider
 *
 * @author Cyrus Sarkosh
 *
 * @module app-angular
 * @summary Provides client-side routing to UI angular app.
 * @desc Provides client-side routing to UI angular app. Available routes are: '/', '/admin'. All other routes default to '/'.
 */

angular.module('app-angular', ['ngRoute', 'ngCookies'])
.config(['$routeProvider', function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: '../pages/home/index.html',
			controller: 'homeController'
		})
		.when('/admin', {
			templateUrl: '../pages/admin/index.html',
			controller: 'adminController'
		})
		.otherwise({redirectTo: '/'});

}]);
