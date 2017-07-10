'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope','$http',function($scope,$http) {
		$scope.getAllProducts = function(){
	 $http.get("http://52.170.201.27:8080//v1/products")
    .then(function(response) {
      $scope.products =   response.data;    
    }, 
    function(response) { // optional
        //TODO:error handling   
    });
}

	$scope.getproductDetails = function(){
	 $http.get("http://52.170.201.27:8080//v1/products?productId="+$scope.productId)
    .then(function(response) {
      $scope.productDetails =   response.data;    
    }, 
    function(response) { // optional
        //TODO:error handling   
    });
}
}]);