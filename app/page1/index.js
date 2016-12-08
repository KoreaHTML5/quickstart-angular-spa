angular.module('myapp')
    .config(function ($routeProvider) {
      $routeProvider
          .when('/page1', {
            controller: 'Page1Ctrl',
            templateUrl: '../app/page1/page1.tpl.html'
          });
    });

require('./page1.ctrl')
