(function(){

  'use strict';
  // Definição dos Controllers usando o Service para reqs HTTP
  angular.module('GroupsControllerModule', [])
  .controller('ListCtrl', ListCtrl)
  .controller('FormCtrl', FormCtrl)
  .controller('GetCtrl', GetCtrl)
  ;

  function ListCtrl($scope, GroupsService) {
    $scope.title = 'Listagem';

    GroupsService.find()
    .success(function(data){
      GroupsService.items = data;
      console.log(GroupsService.items);
      $scope.list = GroupsService.items;
      console.log('Sucesso', data);
    })
    .error(function(err){
      console.log('Erro', err);
    });
  }

  function GetCtrl($scope, GroupsService, $routeParams) {
    $scope.title = 'Consulta de Groups';

    GroupsService.get($routeParams.id)
    .success(function(data){
      $scope.item = data;
      console.log('Sucesso', data);
    })
    .error(function(err){
      console.log('Erro', err);
    });
  }

  function FormCtrl($scope, GroupsService) {
    $scope.title = 'Form de Office';

    $scope.save = function(form) {
      GroupsService.create(form)
      .success(function(data){
        $scope.Model = data;
        GroupsService.items.push(data);
        console.log('Sucesso', data);
      })
      .error(function(err){
        console.log('Erro', err);
      });
    }
  }

  ListCtrl.$inject = ['$scope', 'GroupsService'];
  GetCtrl.$inject = ['$scope', 'GroupsService', '$routeParams'];
  FormCtrl.$inject = ['$scope', 'GroupsService'];

})();