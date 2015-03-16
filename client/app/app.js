'use strict';

angular.module('tasDickesBeeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider, $sceDelegateProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'https://www.googleapis.com/**',

      'http://cruaux.blogspot.de/**',

      'http://www.gattel-stiftung.de/**',

      'http://foodsoft.dickesbee.org/**',

      'http://braumanufaktur.de/**',
      'http://www.hofladen-bauernladen.info/index.php',
      'http://www.domaene-dahlem.de/home/',
      'http://www.landgut-pretschen.de/Produkte/Gemuese',
      'http://www.teltower-ruebchen.com/',
      'http://www.lobetaler-bio.de/',
      'http://www.eiland-grimme.de/',

      'http://markthalleneun.de/lieferservice']);
  });