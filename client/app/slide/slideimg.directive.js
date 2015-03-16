angular.module('tasDickesBeeApp')
  .directive('slideimg', function ($window) {

    /**
     * Resize the Element to its parent size
     * @param  {Element} element - element to resize
     * @return {void}
     */
    var onResize = function(element, fAspectRatio) {
        var iMaxWidth = element.closest('.slideshow').width() - 20;
        var iMaxHeight = element.closest('.slideshow').height() - 20;

        var iWidth = iMaxWidth;
        var iHeight = iWidth * fAspectRatio;

        if (iHeight > iMaxHeight) {
            iHeight = iMaxHeight;
            iWidth = iHeight / fAspectRatio;
        }

        element.find('img').outerWidth(iWidth);
        element.find('img').outerHeight(iHeight);
    };

    return {
      restrict: 'E',
      templateUrl: 'app/slide/slideimg.html',
      link: function (scope, element, attrs) {

        scope.fAspectRatio = 1;

        element.find('img').bind('load', function()
        {
            var iImgWidth = element.find('img').width();
            var iImgHeight = element.find('img').height();

            scope.fAspectRatio = iImgHeight / iImgWidth;

            onResize(element, scope.fAspectRatio);
        });

        angular.element($window).on('resize', function()
        {
            onResize(element, scope.fAspectRatio);
        });
      }
    };
  });