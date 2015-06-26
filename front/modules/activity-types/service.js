(function(){

  'use strict';

  angular.module('ActivityTypesServiceModule', [])
  .service('ActivityTypesService', ActivityTypesService);

  function ActivityTypesService($http) {
    var urlBase = '//localhost:3000/api/activity-types';
    this.find = function() {
      return $http.get(urlBase);
    };

    this.findOne = function(id) {
        return $http.get(urlBase + '/_id/' + id);
    };

    this.create = function(data) {
        return $http.post(urlBase, data);
    };

    this.update = function(data) {
        return $http.put(urlBase + '/_id/' + data._id, data);
    };

    this.remove = function(data) {
        return $http.delete(urlBase + '/_id/' + data._id, data);
    };
  };
  ActivityTypesService.$inject = ['$http'];

})();