'use strict';

/* Services */


// Demonstrate how to register services
angular.module('myApp.services', []).
  value('version', '0.1').
  factory('BeerFactory', ['$http',
    function($http) {
      var dataFactory = {};
      var urlBase = 'api/beers'
      dataFactory.find = function() {
          return $http.get(urlBase);
      };

      dataFactory.findOne = function(id) {
          return $http.get(urlBase + '/_id/' + id);
      };

      dataFactory.add = function(data) {
          return $http.post(urlBase, data);
      };

      dataFactory.update = function(data) {
          return $http.put(urlBase + '/_id/' + data.ID, data)
      };

      dataFactory.remove = function(data) {
          return $http.delete(urlBase + '/_id/' + data.ID, data)
      };
      return dataFactory;
    }
  ]).
  service('BeerService', ['$http',
    function($http) {
      var urlBase = 'api/beers';
      this.find = function() {
        return $http.get(urlBase);
      };

      this.findOne = function(id) {
          return $http.get(urlBase + '/_id/' + id);
      };

      this.add = function(data) {
          return $http.post(urlBase, data);
      };

      this.update = function(data) {
          return $http.put(urlBase + '/_id/' + data._id, data)
      };

      this.remove = function(data) {
          return $http.delete(urlBase + '/_id/' + data._id, data)
      };
    }
  ]);
