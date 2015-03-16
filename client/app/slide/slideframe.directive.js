angular.module('tasDickesBeeApp')
  .directive('slideframe', function ($window) {

    /**
     * Resize the Element to its parent size
     * @param  {Element} element - element to resize
     * @return {void}
     */
    var onResize = function(element) {
        var iWidth = element.closest('.slideshow').width();
        var iHeight = element.closest('.slideshow').height();

        element.outerWidth(iWidth);
        element.outerHeight(iHeight);
    };

    return {
      restrict: 'E',
      templateUrl: 'app/slide/slideframe.html',
      link: function (scope, element, attrs) {
        onResize(element);

        angular.element($window).on('resize', function()
        {
            onResize(element);
        });
      }
    };
  });