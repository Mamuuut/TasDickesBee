'use strict';

angular.module('tasDickesBeeApp')
  .directive('slide', function ($window, $compile) {

    /**
     * Resize the Element to its parent size
     * @param  {Element} element - element to resize
     * @return {void}
     */
    var onResize = function(element) {
        var iWidth = $(window).width();
        var iHeight = $(window).height();

        element.width(iWidth);
        element.height(iHeight);
    };

    var getTemplate = function(contentType) {
        var template = '';

        switch(contentType) {
            case 'slideimg':
                template = '<slideimg></slideimg>';
                break;
            case 'slidemap':
                template = '<slidemap></slidemap>';
                break;
            case 'slideframe':
                template = '<slideframe></slideframe>';
                break;
            case 'slideanim':
                template = '<slideanim></slideanim>';
                break;
        }

        return template;
    };

    return {
      restrict: 'E',
      link: function (scope, element, attrs) {
        onResize(element);

        angular.element($window).on('resize', function()
        {
            onResize(element);
        });

        element.html(getTemplate(scope.item.type)).show();

        $compile(element.contents())(scope);
      }
    };
  });