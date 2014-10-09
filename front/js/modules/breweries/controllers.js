(function(angular){
'use strict';

// Helpers
var _brewery = {
  removeItem: function (arr, item){
    var index = arr.indexOf(item);
    if (index > -1) {
      arr.splice(index, 1);
    }
  },
  cbFindSuccess: function (data, $scope) {
      $scope.breweries = data.data;
      $scope.message = 'List complete';
      console.log(data);
  },
  cbFindError: function (error, $scope) {
      $scope.status = 'Unable to load breweries: ' + error.message;
  },
  cbCreateSuccess: function (data, $scope) {
      $scope.brewery = data.data;
      $scope.message = 'Brewery ' + $scope.brewery.name + '  created successfully!';
  },
  cbCreateError: function (error, $scope) {
      $scope.status = 'Unable to create brewery: ' + error.message;
  },
  cbUpdateSuccess: function (data, $scope) {
      // $scope.beer = data.data;
      $scope.message = 'Brewery ' + $scope.brewery.name + '  update successfully!';
  },
  cbUpdateError: function (error, $scope) {
      $scope.status = 'Unable to create brewery: ' + error.message;
  },
  cbShowSuccess: function (data, $scope) {
    console.log('Show: ', data);
      $scope.brewery = data.data;
      $scope.message = 'Brewery ' + $scope.brewery.name + '  retrieved successfully!';
  },
  cbShowError: function (error, $scope) {
      $scope.status = 'Unable to retrieve brewery: ' + error.message;
  }
};

// Controllers 
angular.module('myApp.modules.Brewery.controllers', []).
  controller('AppController', 
    ['$scope', '$http',
    function ($scope, $http) {

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

  }]).
  controller('RemoveBrewery', 
    ['$scope', '$http', 'BreweryService', 
    function ($scope, $http, BreweryService) {
      var Brewery = BreweryService;
    
      $scope.remove = function(brewery){
        if(confirm('Are you sure? Brewery '+brewery.name+' will be removed.')){
          Brewery.remove(brewery).
          success(function (data) {
            _brewery.removeItem($scope.breweries, brewery);
          }).
          error(function (error) {
              $scope.status = 'Unable to load breweries: ' + error.message;
          });

        }
    };
  }]).
  controller('BreweryCreateController', 
    ['$scope', '$http', 'BreweryService',
    function ($scope, $http, BreweryService) {

      var Brewery = BreweryService;

      $scope.message = 'Fill the form bellow';

      $scope.create = function (brewery){
        Brewery.create(brewery).then(
          function (data){
          _brewery.cbCreateSuccess(data, $scope);
        }, function(err){
          _brewery.cbCreateError(err, $scope); 
        });
      };

  }]).
  controller('BreweryListController', 
    ['$scope', '$http', 'BreweryService', 
    function ($scope, $http, BreweryService) {

      var Brewery = BreweryService;
      Brewery.find().then(function(data){
        _brewery.cbFindSuccess(data, $scope);
      }, function(err){
        _brewery.cbFindError(err, $scope);
      });

  }]).
  controller('BreweryShowController', 
    ['$scope', '$http', '$routeParams', '$location', 'BreweryService',
    function ($scope, $http, $routeParams, $location, BreweryService) {

      var id = $routeParams.id;
      var url = 'api/breweries/_id/'+id;
      var method = 'GET';

      $scope.message = 'Show Brewery';

      var Brewery = BreweryService;
      Brewery.findOne(id).then(function(data){
        _brewery.cbShowSuccess(data, $scope);
      }, function(err){
        _brewery.cbShowError(err, $scope);
      });

      $scope.remove = function(brewery){
        var id = brewery._id;
        var url = 'api/breweries/'+id;
        var method = 'DELETE';

        $http({
          url: url,
          method: method
        }).
        success(function(data){
          console.log(data);
          $scope.brewery = data;
          $scope.message = 'Brewery ' +brewery.name+ ' removed successfully!';
          $location.path('/breweries');
        }).
        error(function(err){
          console.log(err);
          $scope.message = 'Brewery cant be removed!';
        });
      };

  }]).
  controller('BreweryEditController', 
    ['$scope', '$http', '$routeParams', 'BreweryService',
    function ($scope, $http, $routeParams, BreweryService) {

      var id = $routeParams.id;
      var url = 'api/breweries/_id/'+id;

      var Brewery = BreweryService;
      Brewery.findOne(id).then(function(data){
        _brewery.cbShowSuccess(data, $scope);
      }, function(err){
        _brewery.cbShowError(err, $scope);
      });

      $scope.update = function(brewery){

        Brewery.update(brewery).then(function(data){
          _brewery.cbUpdateSuccess(data, $scope);
        }, function(err){
          _brewery.cbUpdateError(err, $scope);
        });

      };
  }]).
  controller('BreweryRemoveController', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
    $scope.title = 'Workshop Be MEAN';

    var method = 'GET';
    var id = $routeParams.id;
    var url = '/api/breweries/_id/'+id;
    $http({
      method: method,
      url: url
    })
    .success(function(data){
      $scope.brewery = data;
      $scope.msg = 'About ' + $scope.brewery.name;
    })
    .error(function(data){
      $scope.msg = 'Error in get brewery';
    });

    $scope.remove = function(brewery){
      var method = 'DELETE';
      var url = '/api/breweries/_id/'+brewery._id;
      console.log(url);
      if(confirm('Are you sure?')){
        $http({
          method: method,
          url: url
        })
        .success(function(data){
          $scope.msg = 'Brwery ' +brewery.name+ ' deleted successfully';
        })
        .error(function(data){
          $scope.msg = 'ERROR on DELETE';
        });

      }
    };

  }]);
})(angular);
