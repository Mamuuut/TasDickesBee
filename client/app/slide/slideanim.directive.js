angular.module('tasDickesBeeApp')
  .directive('slideanim', function ($window, $compile, $http, $rootScope) {

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

    var showFrame = function(element, iFrame) {
      element.find('[data-frame=' + iFrame + ']').css('visibility', 'visible');
    }

    return {
      restrict: 'E',
      link: function (scope, element, attrs) {

        scope.iFrame = 0;

        onResize(element);

        $rootScope.$on('keySpace', function () {
          scope.iFrame++;
          showFrame(element, scope.iFrame);
        });

        angular.element($window).on('resize', function()
        {
          onResize(element);
        });

        $http.get(scope.item.template)
          .then(function(response){
            element.html($compile(response.data)(scope));
          });
      }
    };
  });