
var app = angular.module('whackacat', []);

app.controller('game', function($scope){
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
