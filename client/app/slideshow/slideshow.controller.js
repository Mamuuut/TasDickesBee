'use strict';

angular.module('tasDickesBeeApp')
  .controller('SlideshowCtrl', function ($scope, $routeParams, $http, $rootScope) {

    $scope.bHasSlide = false;
    $scope.bHasMap = false;

    $http.get('app/slideshow/slideshow.json').success(function(data) {

      if (data[$routeParams.slideshowId] !== undefined) {
        $scope.slideshow = data[$routeParams.slideshowId].slides;
        $scope.bHasSlide = $scope.slideshow !== undefined;

        $scope.map = data[$routeParams.slideshowId].map;
        $scope.bHasMap = $scope.map !== undefined;

        var asClasses = ['active', 'next', 'last'];

        angular.forEach($scope.slideshow, function(slide, index) {
          slide.class = asClasses[index] || 'last';
        });
      }
    });
  });
