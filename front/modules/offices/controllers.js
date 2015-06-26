(function(){

  'use strict';
  // Definição dos Controllers usando o Service para reqs HTTP
  angular.module('OfficesControllerModule', [])
  .controller('ListCtrl', ListCtrl)
  .controller('FormCtrl', FormCtrl)
  .controller('GetCtrl', GetCtrl)
  ;

  function ListCtrl($scope, OfficesService) {
    $scope.title = 'Listagem';

    OfficesService.find()
    .success(function(data){
      $scope.list = data;
      console.log('Sucesso', data);
    })
    .error(function(err){
      console.log('Erro', err);
    });
  }

  function GetCtrl($scope, OfficesService, $routeParams) {
    $scope.title = 'Consulta de Office';

    OfficesService.get($routeParams.id)
    .success(function(data){
      $scope.item = data;
      console.log('Sucesso', data);
    })
    .error(function(err){
      console.log('Erro', err);
    });
  }

  function FormCtrl($scope, OfficesService) {
    $scope.title = 'Form de Office';

    $scope.save = function(form) {
      OfficesService.create(form)
      .success(function(data){
        $scope.Model = data;
        console.log('Sucesso', data);
      })
      .error(function(err){
        console.log('Erro', err);
      });
    }
  }

  ListCtrl.$inject = ['$scope', 'OfficesService'];
  GetCtrl.$inject = ['$scope', 'OfficesService', '$routeParams'];
  FormCtrl.$inject = ['$scope', 'OfficesService'];

})();