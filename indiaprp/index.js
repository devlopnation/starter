var IPApp = angular.module("IPApp",["ionic"]);

IPApp.service("IPServ",["$http" , "$rootScope", IPServ]);

IPApp.controller("IPCtrl",["$scope","$ionicLoading","IPServ", IPCtrl]);

IPApp.config(function($stateProvider) {
  $stateProvider
  .state("index", {
    url: "/",
    templateUrl: "index.html",
      controller:"IPCtrl"
  })
  .state("detail", {
    url: "/detail.html",
    templateUrl:"detail.html",
      controller:"detailCtrl"
  });
});


function IPCtrl($scope,$ionicLoading,IPServ){
    $ionicLoading.show({template : "Loading Location...."});
    $scope.subject = [];
    $scope.$on("IPApp.subject",function(_,result){
        console.log("inside on");
        result.listings.forEach( function(p){
            console.log("inside for each");
            $scope.subject.push({
                title: p.title ,
                thumb_url : p.thumb_url,
                img_url : p.img_url,
                summary : p.summary,
                property_type : p.property_type,
                price : p.price
            });
        });
        $scope.$broadcast("scroll.refreshComplete");
        $ionicLoading.hide();
    });
    IPServ.loadSubject();
    
    $scope.reload = function(){
        $scope.subject =[];
        IPServ.loadSubject();
    }
    
    $scope.goToDetail = function($indexx){
        $scope.currentSub = $scope.subject[$indexx];
        console.log($scope.currentSub);
    }
    
}

function IPServ($http, $rootScope){
    
    this.loadSubject = function(){
            $http.get("https://api.myjson.com/bins/17jjw")
                .success(function(result){
                console.log("success" + result);
           $rootScope.$broadcast("IPApp.subject",result);
        });
    }
}



