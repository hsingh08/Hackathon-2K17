// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic','ngCordova','app.controllers', 'app.routes', 'app.directives','app.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})



.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    
    $ionicConfigProvider.tabs.position("top");
    
	$stateProvider

	.state('login', {
		url: "/login",
		templateUrl: "templates/searchApp.html",
		controller: 'searchAppCtrl'
	})
    
    .state('register', {
		url: "/register",
		templateUrl: "templates/register.html",
		controller: 'registerCtrl'
	})
    
    
     .state('home', {
    url: "/home",
    templateUrl: "templates/home.html",
    controller:"homeCtrl"    
  });
    
    	
$urlRouterProvider
    
    .otherwise('/login');
  
});