(function(){

  'use strict';

  angular.module('OfficesServiceModule', [])
  .service('OfficesService', OfficesService);

  function OfficesService($http) {
    var urlBase = '//localhost:3000/api/offices';
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
        return $http.put(urlBase + '/_id/' + data._id, data);
    };

    this.remove = function(data) {
        return $http.delete(urlBase + '/_id/' + data._id, data);
    };
  };
  OfficesService.$inject = ['$http'];

})();