'use strict';

angular.module('tasDickesBeeApp')
  .directive('slideshow', function ($rootScope) {

    var updateClass = function(element)
    {
        element.prev().prev().addClass('first');
        element.prev().addClass('prev');
        element.addClass('active');
        element.next().addClass('next');
        element.next().next().addClass('last');
    };

    return {
      restrict: 'A',
      link: function (scope, element, attrs) {

        $rootScope.$on('keyDown', function () {
            element.find('slidemap').css('top', 0);
        });

        $rootScope.$on('keyUp', function () {
            element.find('slidemap').css('top', '-100%');
        });

        $rootScope.$on('keyPrev', function () {

            var elCurrent = element.find('.slide.active');
            if (elCurrent.prev('.slide').length > 0) {
                elCurrent = elCurrent.prev('.slide');
                element.find('.slide').removeClass('first prev active next last');
                updateClass(elCurrent);
            }
        });

        $rootScope.$on('keyNext', function () {

            var elCurrent = element.find('.slide.active');
            if (elCurrent.next('.slide').length > 0) {
                elCurrent = elCurrent.next('.slide');
                element.find('.slide').removeClass('first prev active next last');
                updateClass(elCurrent);
            }
        });
      }
    };
  });