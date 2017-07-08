'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
//	$scope.getDetails = function(){
	$scope.check = 'true';
		$scope.shortLinkDetails = {"shortLinkId":"123",
"owner": "Neha jayadeep",
"createdDate": "04-07-2016",
"expiry":"04-07-2017"
};
//	};
}]);