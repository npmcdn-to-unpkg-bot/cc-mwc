
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
