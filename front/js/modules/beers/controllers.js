(function(angular){
'use strict';

// Helpers
var _beer = {
  removeItem: function (arr, item){
    var index = arr.indexOf(item);
    if (index > -1) {
      arr.splice(index, 1);
    }
  },
  cbFindSuccess: function (data, $scope) {
      $scope.beers = data.data;
      $scope.message = 'List complete';
      console.log(data);
  },
  cbFindError: function (error, $scope) {
      $scope.status = 'Unable to load beers: ' + error.message;
  },
  cbCreateSuccess: function (data, $scope) {
      $scope.beer = data.data;
      $scope.message = 'Beer ' + $scope.beer.name + '  created successfully!';
  },
  cbCreateError: function (error, $scope) {
      $scope.status = 'Unable to create beer: ' + error.message;
  },
  cbUpdateSuccess: function (data, $scope) {
      // $scope.beer = data.data;
      $scope.message = 'Beer ' + $scope.beer.name + '  update successfully!';
  },
  cbUpdateError: function (error, $scope) {
      $scope.status = 'Unable to create beer: ' + error.message;
  },
  cbShowSuccess: function (data, $scope) {
    console.log('Show: ', data);
      $scope.beer = data.data;
      $scope.message = 'Beer ' + $scope.beer.name + '  retrieved successfully!';
  },
  cbShowError: function (error, $scope) {
      $scope.status = 'Unable to retrieve beer: ' + error.message;
  }
};

// Controllers 
angular.module('myApp.modules.Beer.controllers', []).
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
  controller('RemoveBeer', 
    ['$scope', '$http', 'BeerService', 
    function ($scope, $http, BeerService) {
      var Beer = BeerService;
    
      $scope.remove = function(beer){
        if(confirm('Are you sure? Beer '+beer.name+' will be removed.')){
          Beer.remove(beer).
          success(function (data) {
            _beer.removeItem($scope.beers, beer);
          }).
          error(function (error) {
              $scope.status = 'Unable to load beers: ' + error.message;
          });

        }
    };
  }]).
  controller('BeerCreateController', 
    ['$scope', '$http', 'BeerService',
    function ($scope, $http, BeerService) {

      var Beer = BeerService;

      $scope.message = 'Fill the form bellow';

      $scope.create = function (beer){
        Beer.create(beer).then(
          function (data){
          _beer.cbCreateSuccess(data, $scope);
        }, function(err){
          _beer.cbCreateError(err, $scope); 
        });
      };

  }]).
  controller('BeerListController', 
    ['$scope', '$http', 'BeerService', 
    function ($scope, $http, BeerService) {

      var Beer = BeerService;
      Beer.find().then(function(data){
        _beer.cbFindSuccess(data, $scope);
      }, function(err){
        _beer.cbFindError(err, $scope);
      });

  }]).
  controller('BeerShowController', 
    ['$scope', '$http', '$routeParams', '$location', 'BeerService',
    function ($scope, $http, $routeParams, $location, BeerService) {

      var id = $routeParams.id;
      var url = 'api/beers/_id/'+id;
      var method = 'GET';

      $scope.message = 'Show Beer';

      var Beer = BeerService;
      Beer.findOne(id).then(function(data){
        _beer.cbShowSuccess(data, $scope);
      }, function(err){
        _beer.cbShowError(err, $scope);
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
          $scope.message = 'Beer ' +beer.name+ 'removed successfully!';
          $location.path('/beers');
        }).
        error(function(err){
          console.log(err);
          $scope.message = 'Beer cant be removed!';
        });
      };

  }]).
  controller('BeerEditController', 
    ['$scope', '$http', '$routeParams', 'BeerService',
    function ($scope, $http, $routeParams, BeerService) {

      var id = $routeParams.id;
      var url = 'api/beers/_id/'+id;

      var Beer = BeerService;
      Beer.findOne(id).then(function(data){
        _beer.cbShowSuccess(data, $scope);
      }, function(err){
        _beer.cbShowError(err, $scope);
      });

      $scope.update = function(beer){

        Beer.update(beer).then(function(data){
          _beer.cbUpdateSuccess(data, $scope);
        }, function(err){
          _beer.cbUpdateError(err, $scope);
        });

      };
  }]).
  controller('BeerRemoveController', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
    $scope.title = 'Workshop Be MEAN';

    var method = 'GET';
    var id = $routeParams.id;
    var url = '/api/beers/_id/'+id;
    $http({
      method: method,
      url: url
    })
    .success(function(data){
      $scope.beer = data;
      $scope.msg = 'About ' + $scope.beer.name;
    })
    .error(function(data){
      $scope.msg = 'Error in get beer';
    });

    $scope.remove = function(cerveja){
      var method = 'DELETE';
      var url = '/api/beers/_id/'+cerveja._id;
      console.log(url);
      if(confirm('Are you sure?')){
        $http({
          method: method,
          url: url
        })
        .success(function(data){
          $scope.msg = 'Beer ' +cerveja.name+ ' deleted successfully';
        })
        .error(function(data){
          $scope.msg = 'ERROR on DELETE';
        });

      }
    };

  }]);
})(angular);
