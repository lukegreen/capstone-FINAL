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

    // Public API here
     return $resource('https://api.nasa.gov/mars-photos/api/v1/rovers/:roverName/photos?sol=:maxSol&page=:pageNum&api_key=soma08IimfFaJ8eSYCZpnsQxLEr01sMJflVPLtZx', {}, {
       query: {
         method:'GET',
         params:{
           roverName: "curiosity",
           maxSol: "1000",
           pageNum: "1"
        },
         isArray:false
       }
     });
  });
