(function(angular){
'use strict';

/* Services */


// Demonstrate how to register services
angular.module('myApp.modules.Beer.services', []).
  value('version', '0.1').
  service('BeerService', ['$http',
    function($http) {
      var urlBase = 'api/beers';
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
    }
  ]);
})(angular);
