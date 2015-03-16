'use strict';

angular.module('tasDickesBeeApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/menu', {
        templateUrl: 'app/menu/menu.html',
        controller: 'MenuCtrl'
      });
  });
