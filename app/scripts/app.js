'use strict';

/**
 * @ngdoc overview
 * @name capstoneFinalApp
 * @description
 * # capstoneFinalApp
 *
 * Main module of the application.
 */
angular
  .module('capstoneFinalApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/roverView', {
        templateUrl: 'views/roverview.html',
        controller: 'RoverviewCtrl',
        controllerAs: 'roverView'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
