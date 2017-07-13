'use strict';

angular.module('myApp.view6', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/events', {
    templateUrl: 'view6/view6.html',
    controller: 'View6Ctrl'
  });
}])

.controller('View6Ctrl', ['$scope','$http',function($scope,$http) {
  $http.get("http://52.170.201.27:8080/v1/events")
    .then(function(response) {
      $scope.events =   response.data.events; 
     
    }, 
    function(response) { // optional
        //TODO:error handling   
    });

    $scope.registerEvent =function(){
      $scope.events[$scope.eventIndex].registered=true;
      $scope.amount = Number($scope.events[$scope.eventIndex].entryFee) * Number($scope.registrationTickets);
      console.log($scope.amount);
      $http.get("http://52.170.201.27:8080/v1/events")
    .then(function(response) {
      $scope.events =   response.data.events; 
     
    }, 
    function(response) { // optional
        //TODO:error handling   
    });
    }
    $scope.setIds = function(eventId, index){
      $scope.registrationId=eventId;
      $scope.eventIndex=index;
    }
}]);

