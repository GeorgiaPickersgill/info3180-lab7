// Your JavaScript Code here
const app = angular.module("thumnailsApp",[]);
app.controller("thumbnailsCtrl", function($scope, $http){
    
    $http.get("/api/thumbnails")
    .then(function(response){
        $scope.mythumbs = response.data.thumbnails;
    }, function(response){
        $scope.mythumbs = "Something is not right...Something is Quite wrong!";
        
    });
});