'use strict';

angular.module('myApp.view6', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/events', {
    templateUrl: 'view6/view6.html',
    controller: 'View6Ctrl'
  });
}])

.controller('View6Ctrl', ['$scope','$http',function($scope,$http) {
  $scope.register = {};
  $http.get("http://52.170.201.27:8080/v1/events")
    .then(function(response) {
      $scope.events =   response.data.events; 
     
    }, 
    function(response) { // optional
        //TODO:error handling   
    });

    $scope.registerEvent =function(){
     $scope.error = undefined;
      $scope.amount = Number($scope.events[$scope.eventIndex].entryFee) * Number($scope.register.registrationTickets);
      console.log($scope.amount);
      var jsonData = {}
      jsonData.eventId = $scope.events[$scope.eventIndex].eventId;
      jsonData.personEmail = $scope.register.registrationEmail;
      jsonData.personName = $scope.register.registrationName;
      jsonData.contactNumber = $scope.register.registrationContact;
       jsonData.amountCharged = $scope.events[$scope.eventIndex].entryFee;
       jsonData.registrationDateFormat = $scope.events[$scope.eventIndex].eventDateFormat;

    $http({
        url: 'http://52.170.201.27:8080/v1/register',
        method: "POST",
        data: jsonData
    })
    .then(function(response) {
            $scope.register.registered = true;
    }, 
    function(response) { // optional
            $scope.error = 'Error occurred. please try again';
    });
    }
    $scope.setIds = function(eventId, index){
      $scope.registrationId=eventId;
      $scope.eventIndex=index;
    }
}]);

