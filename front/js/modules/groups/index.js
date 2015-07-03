(function(){

  'use strict';
  // Aqui eu seto o modulo principal, suas dependencias internas e suas rotas
  angular.module('myApp.Groups', [
    'ngRoute'
  , 'GroupsServiceModule'
  , 'GroupsControllerModule'
  ])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/groups', {
        templateUrl: 'expose/groups/index/html',
        controller: 'ListCtrl'
      })
      .when('/groups/form', {
        templateUrl: 'expose/groups/form/html',
        controller: 'FormCtrl'
      })
      .when('/groups/:id', {
        templateUrl: 'expose/groups/get/html',
        controller: 'GetCtrl'
      })
    ;
  }]);

})();