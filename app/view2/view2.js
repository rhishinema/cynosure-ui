'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$http',function($scope, $http) {
 $scope.myInterval = 2000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function(url) {
    var newWidth = 600 + slides.length + 1;
    var index = currIndex++;
    //console.log(index);
    slides.push({
      image: url,
      id: index
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };
    $scope.getGalleryImages = function(){
   $http.get("http://52.170.201.27:8080/v1/gallery")
    .then(function(response) {
      $scope.galleryImgs =   response.data; 
       for (var i = 0; i < $scope.galleryImgs.length; i++) {
    $scope.addSlide($scope.galleryImgs[i]);
  }   
    }, 
    function(response) { // optional
        //TODO:error handling   
    });
}
$scope.getGalleryImages();
 

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
}]);