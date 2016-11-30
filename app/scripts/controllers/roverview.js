'use strict';

/**
 * @ngdoc function
 * @name capstoneFinalApp.controller:RoverviewCtrl
 * @description
 * # RoverviewCtrl
 * Controller of the capstoneFinalApp
 */
angular.module('capstoneFinalApp')
  .controller('RoverviewCtrl', function ($scope, roverData, $routeParams) {

     $scope.roverName = $routeParams.roverName;

     console.log($scope.roverName);
     //get data from API
     $scope.roverData = roverData.query({roverName: $scope.roverName});
     $scope.roverData.$promise.then(function(data){
       $scope.maxSol = data.photos[0].rover.max_sol;
       $scope.roverDataTwo = roverData.query({
         roverName: $scope.roverName,
         maxSol: $scope.maxSol
       });
       $scope.roverDataTwo.$promise.then(function(data){

       //Manifest
       $scope.roverLaunchDate = data.photos[0].rover.launch_date;
       $scope.roverLandingDate = data.photos[0].rover.landing_date;
       $scope.roverStatus = data.photos[0].rover.status;
       $scope.roverTotalPhotos = data.photos[0].rover.total_photos;
       console.log(data.photos[0].sol);
       //Most recent photo
       $scope.mostRecent = data.photos[0].img_src;
       console.log($scope.mostRecent);
       //insert History
       if($scope.roverName === "curiosity"){
         document.getElementById("historyPara").innerHTML = "History of Curiosity";
       } else if($scope.roverName === "opportunity") {
         document.getElementById("historyPara").innerHTML = "History of Opportunity";
       } else {
         document.getElementById("historyPara").innerHTML = "History of Spirit";
       }
     });
   });
  });
