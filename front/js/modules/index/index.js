(function(){

  'use strict';
  // Aqui eu seto o modulo principal, suas dependencias internas e suas rotas
  angular.module('myApp.Index', [
    'ngRoute'
  ])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'expose/index/index/html'
      })
    ;
  }]);

})();