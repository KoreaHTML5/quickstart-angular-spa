angular.module('myapp', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
      $routeProvider
          .otherwise({
            redirectTo: '/'
          });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

    });

require('./main');
require('./page1');

