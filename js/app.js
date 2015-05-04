"use strict";

var app = angular.module('gameApp',[]);


app.controller('gameCtrl',['$scope', '$interval',
    function($scope,$interval){




        $scope.isAvailable = function(job){
            if(job.value <= $scope.cash )
                 return false;
            else
                 return true;
        };


        $scope.adding = 0;
        $scope.cash = 0;
        $scope.jobs = {job:[
            {name:"waitress"    ,icon:"img/waitress.png"    ,value:10   ,adding:1   ,increase:1.1  ,used:0  },
            {name:"bus driver"  ,icon:"img/buss_driver.jpg" ,value:100  ,adding:10  ,increase:1.2  ,used:0  },
            {name:"life guard"  ,icon:"img/lifegurad.jpg"   ,value:1500 ,adding:13  ,increase:1.3  ,used:0  },
            {name:"pilot"       ,icon:"img/pilot.jpg"       ,value:10000,adding:110 ,increase:1.35 ,used:0   }
        ]};

        $scope.cashIt = function(job){
            if(job.value < $scope.cash ){
                $scope.adding += job.adding;
                $scope.cash = $scope.cash - job.value;
                job.value = job.value * job.increase;
                job.used = job.used + 1;
            }

        }

        var promise =  $interval(function(){
                        $scope.cash = $scope.cash +  ($scope.adding/4);
                         },250);



}]);
