'use strict';

angular.module('myApp.view6', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view6', {
    templateUrl: 'view6/view6.html',
    controller: 'View6Ctrl'
  });
}])

.controller('View6Ctrl', ['$scope','$http',function($scope,$http) {
  $http.get("http://52.170.201.27:8080/v1/gallery")
    .then(function(response) {
      $scope.events =   response.data; 
     
    }, 
    function(response) { // optional
        //TODO:error handling   
    });
}]);

