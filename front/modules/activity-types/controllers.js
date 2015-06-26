(function(){

  'use strict';
  // Definição dos Controllers usando o Service para reqs HTTP
  angular.module('ActivityTypesControllerModule', [])
  .controller('ListCtrl', ListCtrl);

  function ListCtrl($scope, ActivityTypesService) {
    $scope.title = 'Listagem';

    ActivityTypesService.find()
    .success(function(data){
      $scope.list = data;
      console.log('Sucesso', data);
    })
    .error(function(err){
      console.log('Erro', err);
    });
  }

  ListCtrl.$inject = ['$scope', 'ActivityTypesService'];

})();