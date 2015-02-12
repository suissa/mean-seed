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
    // Applications
    when('/applications', {
      templateUrl: 'expose/applications/list',
      controller: 'ApplicationListController'
    }).
    when('/applications/create', {
      templateUrl: 'expose/applications/create',
      controller: 'ApplicationCreateController'
    }).
    when('/applications/:id', {
      templateUrl: 'expose/applications/show',
      controller: 'ApplicationShowController'
    }).
    when('/applications/:id/edit', {
      templateUrl: 'expose/applications/edit',
      controller: 'ApplicationEditController'
    }).
    when('/applications/:id/remove', {
      templateUrl: 'expose/applications/remove',
      controller: 'ApplicationRemoveController'
    }).
    // Issues
    when('/issues', {
      templateUrl: 'expose/issues/list',
      controller: 'IssueListController'
    }).
    when('/issues/create', {
      templateUrl: 'expose/issues/create',
      controller: 'IssueCreateController'
    }).
    when('/issues/list', {
      templateUrl: 'expose/issues/list',
      controller: 'IssueListController'
    }).
    // Default
    otherwise({
      redirectTo: '/applications'
    });
  $locationProvider.html5Mode(true);
}]);
})(angular);