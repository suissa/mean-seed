(function (angular){
'use strict';

// Helpers
var _user = {
  removeItem: function (arr, item){
    var index = arr.indexOf(item);
    if (index > -1) {
      arr.splice(index, 1);
    }
  },
  cbFindSuccess: function (data, $scope) {
      $scope.Users = data.data;
      $scope.message = 'List complete';
      console.log(data);
  },
  cbFindError: function (error, $scope) {
      $scope.status = 'Unable to load Users: ' + error.message;
  },
  cbCreateSuccess: function (data, $scope) {
      $scope.User = data.data;
      $scope.message = 'User ' + $scope.User.name + '  created successfully!';
  },
  cbCreateError: function (error, $scope) {
      $scope.status = 'Unable to create User: ' + error.message;
  },
  cbUpdateSuccess: function (data, $scope) {
      // $scope.User = data.data;
      $scope.message = 'User ' + $scope.User.name + '  update successfully!';
  },
  cbUpdateError: function (error, $scope) {
      $scope.status = 'Unable to create User: ' + error.message;
  },
  cbShowSuccess: function (data, $scope) {
    console.log('Show: ', data);
      $scope.User = data.data;
      $scope.message = 'User ' + $scope.User.name + '  retrieved successfully!';
  },
  cbShowError: function (error, $scope) {
      $scope.status = 'Unable to retrieve User: ' + error.message;
  }
};

// Controllers 
angular.module('myApp.modules.User.controllers', []).
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
  controller('RemoveUser', 
    ['$scope', '$http', 'UserService', 
    function ($scope, $http, UserService) {
      var User = UserService;
    
      $scope.remove = function(User){
        if(confirm('Are you sure? User '+User.name+' will be removed.')){
          User.remove(User).
          success(function (data) {
            _user.removeItem($scope.Users, User);
          }).
          error(function (error) {
              $scope.status = 'Unable to load Users: ' + error.message;
          });

        }
    };
  }]).
  controller('UserCreateController', 
    ['$scope', '$http', 'UserService',
    function ($scope, $http, UserService) {

      var User = UserService;

      $scope.message = 'Fill the form bellow';

      $scope.create = function (User){
        User.create(User).then(
          function (data){
          _user.cbCreateSuccess(data, $scope);
        }, function(err){
          _user.cbCreateError(err, $scope); 
        });
      };

  }]).
  controller('UserListController', 
    ['$scope', '$http', 'UserService', 
    function ($scope, $http, UserService) {

      var User = UserService;
      User.find().then(function(data){
        _user.cbFindSuccess(data, $scope);
      }, function(err){
        _user.cbFindError(err, $scope);
      });

  }]).
  controller('UserShowController', 
    ['$scope', '$http', '$routeParams', '$location', 'UserService',
    function ($scope, $http, $routeParams, $location, UserService) {

      var id = $routeParams.id;
      var url = 'api/Users/_id/'+id;
      var method = 'GET';

      $scope.message = 'Show User';

      var User = UserService;
      User.findOne(id).then(function(data){
        _user.cbShowSuccess(data, $scope);
      }, function(err){
        _user.cbShowError(err, $scope);
      });

      $scope.remove = function(User){
        var id = User._id;
        var url = 'api/Users/'+id;
        var method = 'DELETE';

        $http({
          url: url,
          method: method
        }).
        success(function(data){
          console.log(data);
          $scope.User = data;
          $scope.message = 'User ' +User.name+ 'removed successfully!';
          $location.path('/Users');
        }).
        error(function(err){
          console.log(err);
          $scope.message = 'User cant be removed!';
        });
      };

  }]).
  controller('UserEditController', 
    ['$scope', '$http', '$routeParams', 'UserService',
    function ($scope, $http, $routeParams, UserService) {

      var id = $routeParams.id;
      var url = 'api/Users/_id/'+id;

      var User = UserService;
      User.findOne(id).then(function(data){
        _user.cbShowSuccess(data, $scope);
      }, function(err){
        _user.cbShowError(err, $scope);
      });

      $scope.update = function(User){

        User.update(User).then(function(data){
          _user.cbUpdateSuccess(data, $scope);
        }, function(err){
          _user.cbUpdateError(err, $scope);
        });

      };
  }]).
  controller('UserRemoveController', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
    $scope.title = 'Workshop Be MEAN';

    var method = 'GET';
    var id = $routeParams.id;
    var url = '/api/Users/_id/'+id;
    $http({
      method: method,
      url: url
    })
    .success(function(data){
      $scope.User = data;
      $scope.msg = 'About ' + $scope.User.name;
    })
    .error(function(data){
      $scope.msg = 'Error in get User';
    });

    $scope.remove = function(cerveja){
      var method = 'DELETE';
      var url = '/api/Users/_id/'+cerveja._id;
      console.log(url);
      if(confirm('Are you sure?')){
        $http({
          method: method,
          url: url
        })
        .success(function(data){
          $scope.msg = 'User ' +cerveja.name+ ' deleted successfully';
        })
        .error(function(data){
          $scope.msg = 'ERROR on DELETE';
        });

      }
    };

  }]);
})(angular);
