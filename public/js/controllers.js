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

  }).
  controller('BeerShowController', 
    ['$scope', '$http', '$routeParams', '$location',
    function ($scope, $http, $routeParams, $location) {

      var id = $routeParams.id;
      var url = 'api/beers/_id/'+id;
      var method = 'GET';

      $scope.message = 'Retrieve beers';

      $http({
        url: url,
        method: method
      }).
      success(function(data){
        console.log('Beer: ', data);
        $scope.beer = data;
      }).
      error(function(err){
        console.log(err);
      });

      $scope.remove = function(beer){
        var id = beer._id;
        var url = 'api/beers/'+id;
        var method = 'DELETE';

        $http({
          url: url,
          method: method
        }).
        success(function(data){
          console.log(data);
          $scope.beer = data;
          $scope.message = 'Cerveja ' +beer.name+ 'removida com sucesso!';
          $location.path('/beers');
        }).
        error(function(err){
          console.log(err);
          $scope.message = 'Cerveja não pode ser removida!';
        });
      }

  }]);
