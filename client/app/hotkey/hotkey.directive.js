'use strict';

angular.module('tasDickesBeeApp')
  .directive('hotkey', function ($document, $rootScope) {

    $document.on('keyup', function(event)
    {
        switch(event.keyCode) {
            case 37 :
                $rootScope.$broadcast('keyPrev')
                break;
            case 38 :
                $rootScope.$broadcast('keyUp')
                break;
            case 40 :
                $rootScope.$broadcast('keyDown')
                break;
            case 39 :
                $rootScope.$broadcast('keyNext')
                break;
            case 32 :
                $rootScope.$broadcast('keySpace')
                break;
        }
    });

    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
      }
    };
  });