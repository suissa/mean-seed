(function(){

  'use strict';

  angular.module('GroupsServiceModule', [])
  .service('GroupsService', GroupsService)
  ;

  function GroupsService($http) {
    var urlBase = '//localhost:3000/api/groups';

    this.items = [];
    this.find = function() {
      return $http.get(urlBase);
    };

    this.get = function(id) {
      return $http.get(urlBase + '/' + id);
    };

    this.create = function(data) {
        return $http.post(urlBase, data);
    };

    this.update = function(data) {
        return $http.put(urlBase + '/' + data._id, data);
    };

    this.remove = function(data) {
        return $http.delete(urlBase + '/' + data._id, data);
    };
  };
  GroupsService.$inject = ['$http'];

})();