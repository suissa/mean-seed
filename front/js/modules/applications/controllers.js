(function(angular){
'use strict';

// Helpers
var _application = {
  removeItem: function (arr, item) {
    var index = arr.indexOf(item);
    if (index > -1) {
      arr.splice(index, 1);
    }
  },
  cbFindSuccess: function (data, $scope) {
      $scope.applications = data.data;
      $scope.message = 'List complete';
      console.log(data);
  },
  cbFindError: function (error, $scope) {
      $scope.status = 'Unable to load applications: ' + error.message;
  },
  cbCreateSuccess: function (data, $scope) {
      $scope.application = data.data;
      $scope.message = 'Application ' + $scope.application.name + '  created successfully!';
  },
  cbCreateError: function (error, $scope) {
      $scope.status = 'Unable to create application: ' + error.message;
  },
  cbUpdateSuccess: function (data, $scope) {
      // $scope.application = data.data;
      $scope.message = 'Application ' + $scope.application.name + '  update successfully!';
  },
  cbUpdateError: function (error, $scope) {
      $scope.status = 'Unable to create application: ' + error.message;
  },
  cbShowSuccess: function (data, $scope) {
    console.log('Show: ', data);
      $scope.application = data.data;
      $scope.message = 'Application ' + $scope.application.name + '  retrieved successfully!';
  },
  cbShowError: function (error, $scope) {
      $scope.status = 'Unable to retrieve application: ' + error.message;
  }
};

// Controllers 
angular.module('myApp.modules.Application.controllers', []).
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
  controller('RemoveApplication', 
    ['$scope', '$http', 'ApplicationService', 
    function ($scope, $http, ApplicationService) {
      var Application = ApplicationService;
    
      $scope.remove = function (application) {
        if (confirm('Are you sure? Application '+application.name+' will be removed.')) {
          Application.remove(application).
          success(function (data) {
            _application.removeItem($scope.applications, application);
          }).
          error(function (error) {
              $scope.status = 'Unable to load applications: ' + error.message;
          });
        }
      };
    }]).
  controller('ApplicationCreateController', 
    ['$scope', '$http', 'ApplicationService',
    function ($scope, $http, ApplicationService) {

      var Application = ApplicationService;

      $scope.message = 'Fill the form bellow';

      $scope.create = function (application) {
        Application.create(application).then(
          function (data){
          _application.cbCreateSuccess(data, $scope);
        }, function(err){
          _application.cbCreateError(err, $scope); 
        });
      };
    }]).
  controller('ApplicationListController', 
    ['$scope', '$http', 'ApplicationService', 
    function ($scope, $http, ApplicationService) {

      var Application = ApplicationService;
      Application.find().then(function (data) {
        _application.cbFindSuccess(data, $scope);
      }, function (err) {
        _application.cbFindError(err, $scope);
      });
    }]).
  controller('ApplicationShowController', 
    ['$scope', '$http', '$routeParams', '$location', 'ApplicationService',
    function ($scope, $http, $routeParams, $location, ApplicationService) {

      var id = $routeParams.id;
      var url = 'api/applications/_id/' + id;
      var method = 'GET';

      $scope.message = 'Show Application';

      var Application = ApplicationService;
      Application.findOne(id).then(function (data) {
        _application.cbShowSuccess(data, $scope);
      }, function (err) {
        _application.cbShowError(err, $scope);
      });

      $scope.remove = function (application) {
        var id = application._id;
        var url = 'api/applications/' + id;
        var method = 'DELETE';

        $http({
          url: url,
          method: method
        }).
        success(function (data) {
          console.log(data);
          $scope.application = data;
          $scope.message = 'Application ' + application.name + 'removed successfully!';
          $location.path('/applications');
        }).
        error(function (err) {
          console.log(err);
          $scope.message = 'Application cant be removed!';
        });
      };
    }]).
  controller('ApplicationEditController',
    ['$scope', '$http', '$routeParams', 'ApplicationService',
    function ($scope, $http, $routeParams, ApplicationService) {

      var id = $routeParams.id;
      var url = 'api/applications/_id/' + id;

      var Application = ApplicationService;
      Application.findOne(id).then(function (data) {
        _application.cbShowSuccess(data, $scope);
      }, function (err) {
        _application.cbShowError(err, $scope);
      });

      $scope.update = function (application) {

        Application.update(application).then(function (data) {
          _application.cbUpdateSuccess(data, $scope);
        }, function (err) {
          _application.cbUpdateError(err, $scope);
        });
      };
    }]).
  controller('ApplicationRemoveController', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
    $scope.title = 'Workshop Be MEAN';

    var method = 'GET';
    var id = $routeParams.id;
    var url = '/api/applications/_id/' + id;
    $http({
      method: method,
      url: url
    })
    .success(function (data) {
      $scope.application = data;
      $scope.msg = 'About ' + $scope.application.name;
    })
    .error(function (data) {
      $scope.msg = 'Error in get application';
    });

    $scope.remove = function (cerveja) {
      var method = 'DELETE';
      var url = '/api/applications/_id/' + cerveja._id;
      console.log(url);
      if (confirm('Are you sure?')) {
        $http({
          method: method,
          url: url
        })
        .success(function (data) {
          $scope.msg = 'Application ' + cerveja.name + ' deleted successfully';
        })
        .error(function (data) {
          $scope.msg = 'ERROR on DELETE';
        });
      }
    };
  }]);
})(angular);