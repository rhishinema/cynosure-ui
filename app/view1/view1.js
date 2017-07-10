'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http','$q',function($scope,$http,$q) {
	$scope.subscriptionMsg = undefined;
	$scope.subscribe = function(){
		if(!$scope.subscriptionMail){
			$scope.subscriptionMsg = 'Please enter a valid email address';
			$scope.subscription = false;
		}else{
 $http({
        url: 'http://52.170.201.27:8080/v1/subscribers/add?',
        method: "POST",
        data: { 'email' : $scope.subscriptionMail }
    })
    .then(function(response) {
            $scope.subscription = true;
            $scope.subscriptionMsg = 'Successfully subscribed to newletter';
    }, 
    function(response) { // optional
            $scope.subscription = false;
            $scope.subscriptionMsg = 'Error occurred. please try again';
    });
}
	};
}]);