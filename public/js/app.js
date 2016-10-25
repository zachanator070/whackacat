
var app = angular.module('whackacat', []);

app.controller('game', function($scope){

  $scope.score = 0;

  $scope.postHighscore = function(){
    console.log("sending "+JSON.stringify({"name":$scope.name, "score":$scope.score}));
    $.ajax({
      url: "scores",
      method: "POST",
      data: {name:$scope.name, score:$scope.score},
      success: function(){
        location.reload();
        console.log('success');
      }
    });
  };

  $.ajax({
    url: "scores",
    method: "GET",
    success: function(data, status){
      console.log(data);
      $scope.scores = data;
      $scope.$apply();
    }
  });
});
