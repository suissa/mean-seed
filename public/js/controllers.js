'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('BeerListController', ['$scope', '$http', 
    function ($scope, $http) {

      var url = 'api/beers';
      var method = 'GET';

      $scope.message = 'Listagem de Cervejas';

      $http({
        url: url,
        method: method
      }).
      success(function(data){
        console.log(data);
        $scope.data = data;
      }).
      error(function(err){
        console.log(err);
      });

  }]).
  controller('BeerCreateController', function ($scope) {
    // write Ctrl here

  });
