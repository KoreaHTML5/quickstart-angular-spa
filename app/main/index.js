angular.module('myapp')
    .config(function ($routeProvider) {
      $routeProvider
          .when('/', {
            controller: 'MainCtrl',
            templateUrl: '../app/main/main.tpl.html'
          });
    });

require('./main.ctrl');