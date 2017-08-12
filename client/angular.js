var app = angular.module('myApp', ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when('/api/',{
        templateUrl: "../views/home.html"
    })
    .when('/api/:id',{
        templateUrl: "../views/single.html"
    })
    .when('/api/role/:Role',{
        templateUrl: "../views/role.html"
    })
});
app.controller("ChampionGetController",['$scope', '$http','$location',function($scope,$http,$location){
    console.log('i have been got')
        console.log('git clicked')
        $http.get('http://localhost:3000/api/')
            .then(function(response){
                console.log(response.data)
                $scope.champions=response.data
    });
            $scope.getChampion=function(id){
            console.log(id)
            $location.path("/api/" + id)
        };
            $scope.getRole=function(Role){
            console.log(Role)
            $location.path("/api/role/" + Role)
        };
}])
app.controller("SingleChampion",['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
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