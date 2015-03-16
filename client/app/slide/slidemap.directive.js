angular.module('tasDickesBeeApp')
  .directive('slidemap', function ($window, map) {

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

    var createMap = function(scope, element, maps) {

        var oMapOptions = maps[scope.map];
        var iZoom = oMapOptions.zoom;
        var oCenter = new google.maps.LatLng(oMapOptions.lat, oMapOptions.lon);

        scope.oMap = new google.maps.Map(element.find('.map')[0], {
            'center'             : oCenter,
            'mapTypeId'          : google.maps.MapTypeId.TERRAIN,
            'zoom'               : iZoom,
            'mapTypeControl'     : false,
            'zoomControl'        : false,
            'streetViewControl'  : false,
            'scaleControl'       : false,
            'rotateControl'      : false,
            'panControl'         : false,
            'overviewMapControl' : false
        });

        google.maps.event.addListener(scope.oMap, 'click', function() {
            scope.oMap.setZoom(iZoom);
            scope.oMap.panTo(oCenter);
        });

        oMapOptions.markers.forEach(function(oMarkerOptions)
        {
          var oMarker = new google.maps.Marker({
              map: scope.oMap,
              position: new google.maps.LatLng(oMarkerOptions.lat, oMarkerOptions.lon),
              icon : oMarkerOptions.icon,
              title: oMarkerOptions.title || ''
          });

          google.maps.event.addListener(oMarker, 'click', function() {
              scope.oMap.setZoom(13);
              scope.oMap.panTo(oMarker.getPosition());
          });
        });
    }

    return {
      restrict: 'E',
      templateUrl: 'app/slide/slidemap.html',
      link: function (scope, element, attrs) {
        onResize(element);

        angular.element($window).on('resize', function()
        {
            onResize(element);
        });
        map().success(function(maps) {
          createMap(scope, element, maps);
        });
      }
    };
  });