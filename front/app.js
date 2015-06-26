'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.ActivityTypes', // Adicionei o modulo criado no modulo PRINCIPAL
  'myApp.Offices' // Adicionei o modulo criado no modulo PRINCIPAL
  
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
  $locationProvider.html5Mode(true)
}]);
