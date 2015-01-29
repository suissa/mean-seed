(function(angular){
'use strict';

// Controllers 
angular.module('myApp.controllers', 
  [
    'myApp.modules.Beer.controllers',
    'myApp.modules.Brewery.controllers',
    'myApp.modules.Application.controllers'
  ]);
})(angular);
