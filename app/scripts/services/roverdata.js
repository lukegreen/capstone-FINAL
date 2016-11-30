'use strict';

/**
 * @ngdoc service
 * @name capstoneFinalApp.roverData
 * @description
 * # roverData
 * Factory in the capstoneFinalApp.
 */
angular.module('capstoneFinalApp')
  .factory('roverData', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
