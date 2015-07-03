'use strict';

// Modulo principal com suas dependencias e nossos modulos
angular.module('myApp', [
  'ngRoute'
, 'myApp.Index'
, 'myApp.Groups' // Adicionei o modulo criado no modulo PRINCIPAL 
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.otherwise({redirectTo: '/groups'});
  $locationProvider.html5Mode(true)
}]);
