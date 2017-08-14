var app = angular.module('myApp', ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: "../views/home.html"
    })
    .when('/champions/:id',{
        templateUrl: "../views/single.html"
    })
    .when('/champions/role/:Role',{
        templateUrl: "../views/role.html"
    })
});
app.controller("ChampionGetController",['$scope', '$http','$location','$sce',function($scope,$http,$location,$sce){
    console.log('i have been got')
        console.log('git clicked')
        $http.get('http://localhost:3000/api/')
            .then(function(response){
                console.log(response.data)
                $scope.champions=response.data
              //  $scope.Spotlight = $sce.trustAsResourceUrl($scope.Spotlight);
    });
            $scope.getChampion=function(id){
            console.log(id)
            $location.path("/champions/" + id)
        };
            $scope.getRole=function(Role){
            console.log(Role)
            $location.path("/champions/role/" + Role)
        };
}])
app.controller("SingleChampion",['$scope', '$routeParams', '$http','$sce', function($scope, $routeParams, $http,$sce){
     var id=$routeParams.id;
    $http.get('http://localhost:3000/api/'+id)
        .then(function(response){
        console.log(response.data)
        $scope.single=response.data
        
    });
}]);
app.controller("RoleChampion",['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
     var role=$routeParams.Role;
    $http.get('http://localhost:3000/api/role/'+ role)
        .then(function(response){
        console.log(response)
        $scope.role=response.data
    });
}]);