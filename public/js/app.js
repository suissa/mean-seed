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
    when('/beers', {
      templateUrl: 'partials/partial1',
      controller: 'BeerListController'
    }).
    when('/beers/create', {
      templateUrl: 'partials/partial2',
      controller: 'BeerCreateController'
    }).
    when('/beers/:id', {
      templateUrl: 'expose/beers/show',
      controller: 'BeerShowController'
    }).
    otherwise({
      redirectTo: '/beers'
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
