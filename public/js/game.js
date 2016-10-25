var worldMusic = new Audio('../sounds/nyan.ogg');
worldMusic.play();
worldMusic.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);

var incorrect = 0;
var max_incorrect = 12;

$(document).ready(function(){

  $(".cat").click(function(){

    $this = $(this);

    if($this.css("visibility") == "visible"){
      var meow = new Audio('../sounds/mad_cat.wav');
      meow.play();
      var scope = angular.element($(".game")).scope();
      scope.$apply(function(){
          scope.score++;
      });
    }

  });

  $("#bottom").click(function(){
    console.log('miss');
    $('#miss').append("<img src='../images/x.svg' class='x'>");
    incorrect++;
    if(incorrect >= max_incorrect){
      console.log("game over");
      var laugh = new Audio("../sounds/laugh.wav");
      laugh.play();
      $(".gameOver").css({"z-index":"3"});
    }
  });

});

var spawnInterval = 1;

var scoreInterval = 25;

function spawn(){

  var meow = new Audio('../sounds/cat.wav');
  meow.play();

  var min = 1
  var max = 6;
  var cat =  Math.floor(Math.random() * (max - min + 1)) + min;
  // cat = 1;

  $("#cat"+cat).css({"visibility":"visible"});
  $("#cat"+cat).animate({
      "backgroundPositionX" : 0,
      "backgroundPositionY" : 0
    }, spawnInterval/2 * 1000, 'linear',function() {
      $("#cat"+cat).animate({
          "backgroundPositionX" : 0,
          "backgroundPositionY" : "+=100"
        }, spawnInterval/2 * 1000, 'linear',function() {
          $("#cat"+cat).css({"visibility":"hidden"});
        }
      );
    }
  );

  var scope = angular.element($(".game")).scope();
  if(scope.score > scoreInterval){
    scoreInterval += 25;
    spawnInterval -= .1;
    if(spawnInterval <= 0){
      spawnInterval = .1;
    }
  }

  setTimeout(spawn, spawnInterval*1000);
}

setTimeout(spawn, spawnInterval*1000);
