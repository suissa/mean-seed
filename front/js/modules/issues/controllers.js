(function(angular){
'use strict';

// Helpers
var _issue = {
  removeItem: function (arr, item) {
    var index = arr.indexOf(item);
    if (index > -1) {
      arr.splice(index, 1);
    }
  },
  cbFindSuccess: function (data, $scope) {
      $scope.issues = data.data;
      $scope.message = 'List complete';
      console.log(data);
  },
  cbFindError: function (error, $scope) {
      $scope.status = 'Unable to load issues: ' + error.message;
  },
  cbCreateSuccess: function (data, $scope) {
      $scope.issue = data.data;
      $scope.message = 'Issue ' + $scope.issue.name + '  created successfully!';
  },
  cbCreateError: function (error, $scope) {
      $scope.status = 'Unable to create issue: ' + error.message;
  },
  cbUpdateSuccess: function (data, $scope) {
      // $scope.issue = data.data;
      $scope.message = 'Issue ' + $scope.issue.name + '  update successfully!';
  },
  cbUpdateError: function (error, $scope) {
      $scope.status = 'Unable to create issue: ' + error.message;
  },
  cbShowSuccess: function (data, $scope) {
    console.log('Show: ', data);
      $scope.issue = data.data;
      $scope.message = 'Issue ' + $scope.issue.name + '  retrieved successfully!';
  },
  cbShowError: function (error, $scope) {
      $scope.status = 'Unable to retrieve issue: ' + error.message;
  }
};

// Controllers 
angular.module('myApp.modules.Issue.controllers', []).
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
  controller('RemoveIssue', 
    ['$scope', '$http', 'IssueService', 
    function ($scope, $http, IssueService) {
      var Issue = IssueService;
    
      $scope.remove = function (issue) {
        if (confirm('Are you sure? Issue '+issue.name+' will be removed.')) {
          Issue.remove(issue).
          success(function (data) {
            _issue.removeItem($scope.issues, issue);
          }).
          error(function (error) {
              $scope.status = 'Unable to load issues: ' + error.message;
          });
        }
      };
    }]).
  controller('IssueCreateController', 
    ['$scope', '$http', 'IssueService',
    function ($scope, $http, IssueService) {

      var Issue = IssueService;

      $scope.message = 'Fill the form bellow';

      $scope.create = function (issue) {
        Issue.create(issue).then(
          function (data){
          _issue.cbCreateSuccess(data, $scope);
        }, function(err){
          _issue.cbCreateError(err, $scope); 
        });
      };
    }]).
  controller('IssueListController', 
    ['$scope', '$http', 'IssueService', 
    function ($scope, $http, IssueService) {

      var Issue = IssueService;
      Issue.find().then(function (data) {
        _issue.cbFindSuccess(data, $scope);
      }, function (err) {
        _issue.cbFindError(err, $scope);
      });
    }]).
  controller('IssueShowController', 
    ['$scope', '$http', '$routeParams', '$location', 'IssueService',
    function ($scope, $http, $routeParams, $location, IssueService) {

      var id = $routeParams.id;
      var url = 'api/issues/_id/' + id;
      var method = 'GET';

      $scope.message = 'Show Issue';

      var Issue = IssueService;
      Issue.findOne(id).then(function (data) {
        _issue.cbShowSuccess(data, $scope);
      }, function (err) {
        _issue.cbShowError(err, $scope);
      });

      $scope.remove = function (issue) {
        var id = issue._id;
        var url = 'api/issues/' + id;
        var method = 'DELETE';

        $http({
          url: url,
          method: method
        }).
        success(function (data) {
          console.log(data);
          $scope.issue = data;
          $scope.message = 'Issue ' + issue.name + 'removed successfully!';
          $location.path('/issues');
        }).
        error(function (err) {
          console.log(err);
          $scope.message = 'Issue cant be removed!';
        });
      };
    }]).
  controller('IssueEditController',
    ['$scope', '$http', '$routeParams', 'IssueService',
    function ($scope, $http, $routeParams, IssueService) {

      var id = $routeParams.id;
      var url = 'api/issues/_id/' + id;

      var Issue = IssueService;
      Issue.findOne(id).then(function (data) {
        _issue.cbShowSuccess(data, $scope);
      }, function (err) {
        _issue.cbShowError(err, $scope);
      });

      $scope.update = function (issue) {

        Issue.update(issue).then(function (data) {
          _issue.cbUpdateSuccess(data, $scope);
        }, function (err) {
          _issue.cbUpdateError(err, $scope);
        });
      };
    }]).
  controller('IssueRemoveController', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
    $scope.title = 'Workshop Be MEAN';

    var method = 'GET';
    var id = $routeParams.id;
    var url = '/api/issues/_id/' + id;
    $http({
      method: method,
      url: url
    })
    .success(function (data) {
      $scope.issue = data;
      $scope.msg = 'About ' + $scope.issue.name;
    })
    .error(function (data) {
      $scope.msg = 'Error in get issue';
    });

    $scope.remove = function (cerveja) {
      var method = 'DELETE';
      var url = '/api/issues/_id/' + cerveja._id;
      console.log(url);
      if (confirm('Are you sure?')) {
        $http({
          method: method,
          url: url
        })
        .success(function (data) {
          $scope.msg = 'Issue ' + cerveja.name + ' deleted successfully';
        })
        .error(function (data) {
          $scope.msg = 'ERROR on DELETE';
        });
      }
    };
  }]);
})(angular);