
/**
 * @requires $routeProvider
 *
 * @author Cyrus Sarkosh
 *
 * @module app-angular
 * @summary Provides client-side routing to UI angular app.
 * @desc Provides client-side routing to UI angular app. Available routes are: '/', '/admin'. All other routes default to '/'.
 */

angular.module('app-angular', ['ngCookies', 'ui.router', 'stormpath', 'stormpath.templates', 'vcRecaptcha'])
.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	var home = {
		controller: 'homeController',
		templateUrl: '/pages/home/index.html',
		url: '/',
		sp: {
			authenticate: false
		}
	}

	var login = {
		controller: 'loginController',
		templateUrl: '/pages/login/index.html',
		url: '/login',
		sp: {
			authenticate: false
		}
	}

	var admin = {
		controller: 'adminController',
		sp: {
			authenticate: true
		},
		templateUrl: '/pages/admin/index.html',
		url: '/admin'
	}

	$stateProvider.state('home', home);
	$stateProvider.state('login', login);
	$stateProvider.state('admin', admin);

})
.run(function($rootScope, $stormpath) {
	$rootScope.loginFailed = false;

	$stormpath.uiRouter({
		forbiddenState: 'login',
		defaultPostLoginState: 'admin',
		loginState: 'login'
	});
});
