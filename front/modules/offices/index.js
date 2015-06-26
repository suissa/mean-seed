(function(){

  'use strict';
  // Aqui eu seto o modulo principal, suas dependencias internas e suas rotas
  angular.module('myApp.Offices', [
    'ngRoute'
  , 'OfficesServiceModule'
  , 'OfficesControllerModule'
  ])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/offices', {
        templateUrl: 'modules/offices/views/list.html',
        controller: 'ListCtrl'
      })
      .when('/offices/form', {
        templateUrl: 'modules/offices/views/form.html',
        controller: 'FormCtrl'
      })
      .when('/offices/:id', {
        templateUrl: 'modules/offices/views/get.html',
        controller: 'GetCtrl'
      })
    ;
  }]);

})();