(function(){

  'use strict';
  // Aqui eu seto o modulo principal, suas dependencias internas e suas rotas
  angular.module('myApp.ActivityTypes', [
    'ngRoute'
  , 'ActivityTypesServiceModule'
  , 'ActivityTypesControllerModule'
  ])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/activity-types', {
      templateUrl: 'modules/activity-types/views/list.html',
      controller: 'ListCtrl'
    });
  }]);

})();