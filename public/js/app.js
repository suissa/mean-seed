'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/view1', {
      templateUrl: 'partials/partial1',
      controller: 'BeerListController'
    }).
    when('/view2', {
      templateUrl: 'partials/partial2',
      controller: 'BeerCreateController'
    }).
    otherwise({
      redirectTo: '/view1'
    });

    // when('/beers', {
    //   templateUrl: 'expose/beers/list',
    //   controller: 'BeerListController'
    // }).
    // when('/beers/add', {
    //   templateUrl: 'expose/beers/create',
    //   controller: 'BeerCreateController'
    // }).
  $locationProvider.html5Mode(true);
});
