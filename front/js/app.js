(function(angular){
'use strict';

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/beers', {
      templateUrl: 'expose/beers/list',
      controller: 'BeerListController'
    }).
    when('/beers/create', {
      templateUrl: 'expose/beers/create',
      controller: 'BeerCreateController'
    }).
    when('/beers/:id', {
      templateUrl: 'expose/beers/show',
      controller: 'BeerShowController'
    }).
    when('/beers/:id/edit', {
      templateUrl: 'expose/beers/edit',
      controller: 'BeerEditController'
    }).
    when('/beers/:id/remove', {
      templateUrl: 'expose/beers/remove',
      controller: 'BeerRemoveController'
    }).
    otherwise({
      redirectTo: '/beers'
    });
  $locationProvider.html5Mode(true);
}]);
})(angular);
