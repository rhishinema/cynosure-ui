'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4/:movieType', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', ['$scope','$routeParams','$http',function($scope,$routeParams,$http) {
	console.log($routeParams.movieType);
	$scope.getAllMovies = function(){
	 $http.get("http://52.170.201.27:8080/v1/movie/all")
    .then(function(response) {
      $scope.movies =   response.data;    
    }, 
    function(response) { // optional
        //TODO:error handling   
    });
}
$scope.getLatestMovies = function(){
	 $http.get("http://52.170.201.27:8080/v1/movie/latest ")
    .then(function(response) {
      $scope.movies =   response.data;   
    }, 
    function(response) { // optional
      //TODO:error handling 
    });	
}
	if($routeParams.movieType === 'all'){
		$scope.getAllMovies();	
	}else if($routeParams.movieType === 'latest'){
		$scope.getLatestMovies();	
	}

}]);