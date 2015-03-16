'use strict';

angular.module('tasDickesBeeApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },{
      'title': 'Foodcoop',
      'link': '/slideshow/foodcoop'
    },{
      'title': 'Dickes Bee',
      'link': '/slideshow/dickesbee'
    },{
      'title': 'Paris',
      'link': '/slideshow/paris'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });