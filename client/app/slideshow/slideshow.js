'use strict';

angular.module('tasDickesBeeApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/slideshow/:slideshowId', {
        templateUrl: 'app/slideshow/slideshow.html',
        controller: 'SlideshowCtrl'
      });
  });
