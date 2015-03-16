'use strict';

angular.module('tasDickesBeeApp')
  .controller('MenuCtrl', function ($scope, $http) {

    // var sApiKey = 'AIzaSyDlBOQS-4aFuLaZDvmjrorsP9btWDHZ1w4';
    // var sApiUrl = 'https://www.googleapis.com/plus/v1/people/101828281549096823166';

    // $http.get(sApiUrl + '&key=' + sApiKey).success(function(data) {
    //   console.log(data);
    // });

    $http.get('app/menu/menu.json').success(function(data) {
      $scope.menu = data;
    });
  });
