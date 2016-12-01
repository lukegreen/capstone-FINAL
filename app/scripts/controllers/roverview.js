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
         document.getElementById("historyPara").innerHTML = "<p>Curiosity was launched from Cape Canaveral on November 26, 2011, at 15:02 UTC aboard the MSL spacecraft and landed on Aeolis Palus in Gale Crater on Mars on August 6, 2012, 05:17 UTC. The Bradbury Landing site was less than 2.4 km (1.5 mi) from the center of the rover's touchdown target after a 563,000,000 km (350,000,000 mi) journey.</p><p>The rover's goals include: investigation of the Martian climate and geology; assessment of whether the selected field site inside Gale Crater has ever offered environmental conditions favorable for microbial life, including investigation of the role of water; and planetary habitability studies in preparation for future human exploration.</p><p>Curiosity's design will serve as the basis for the planned Mars 2020 rover. In December 2012, Curiosity's two-year mission was extended indefinitely.</p>";
       } else if($scope.roverName === "opportunity") {
         document.getElementById("historyPara").innerHTML = "<p>Opportunity, also known as MER-B (Mars Exploration Rover – B) or MER-1, is a robotic rover active on Mars since 2004. Launched on July 7, 2003 as part of NASA's Mars Exploration Rover program, it landed in Meridiani Planum on January 25, 2004, three weeks after its twin Spirit (MER-A) touched down on the other side of the planet. With a planned 90 sol duration of activity, Spirit functioned until getting stuck in 2009 and ceased communications in 2010, while Opportunity remains active as of 2016, having already exceeded its operating plan by 12 years, 219 days (in Earth time). Opportunity has continued to move, gather scientific observations, and report back to Earth for over 50 times its designed lifespan. As of October 4, 2016, the rover had traveled 26.99 miles (43.44 km). This date was mission time of Sol (Mars days) 4514.</p><p>Mission highlights include the initial 90 sol mission, finding extramartian meteorites such as Heat Shield Rock (Meridiani Planum meteorite), and over two years studying Victoria crater. It survived dust-storms and reached Endeavour crater in 2011, which has been described as a second landing site.</p><p>The Jet Propulsion Laboratory (JPL), a division of the California Institute of Technology in Pasadena, California, manages the Mars Exploration Rover project for NASA's Science Mission Directorate in Washington, D.C.</p>";
       } else {
         document.getElementById("historyPara").innerHTML = "<p>Spirit, also known as MER-A (Mars Exploration Rover – A) or MER-2, is a robotic rover on Mars, active from 2004 to 2010. It was one of two rovers of NASA's ongoing Mars Exploration Rover Mission. It landed successfully on Mars at 04:35 Ground UTC on January 4, 2004, three weeks before its twin, Opportunity (MER-B), landed on the other side of the planet. Its name was chosen through a NASA-sponsored student essay competition. The rover became stuck in late 2009, and its last communication with Earth was sent on March 22, 2010.</p><p>The rover completed its planned 90-sol mission. Aided by cleaning events that resulted in more energy from its solar panels, Spirit went on to function effectively over twenty times longer than NASA planners expected. Spirit also logged 7.73 km (4.8 mi) of driving instead of the planned 600 m (0.4 mi), allowing more extensive geological analysis of Martian rocks and planetary surface features. Initial scientific results from the first phase of the mission (the 90-sol prime mission) were published in a special issue of the journal Science.</p>";
       }
     });
   });
  });
