var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var player1 = new Player();
var cc = [];
var obstacle = new Obstacle(900, 500);
var img1 = new Image();
img1.src = "./images/beach.jpg";
img1.onlad = function (){
  ctx.drawImage(img, 0, 0);

}


createCrocodile();
// var crocodile1 = new Obstacle(700, 370);
// var crocodile2 = new Obstacle(300, 200);

function createCrocodile() {
  var numberOfCocrodile = 2;
  for (var i = 0; i <= numberOfCocrodile; i++) {
    var random1 = Math.floor(Math.random() * 300) + 100; //un numero entre 0px y el limite inferior del canvas.
    cc.push(new Obstacle(900, random1))

  }

  function updateCanvas() {
    ctx.clearRect(0, 0, 1500, 1200);
    ctx.font = "15px Georgia";
    player1.draw();
    cc.forEach(function (coco) {
      coco.draw(player1)
    })
    // obstacle.Collision(player1);
    ctx.fillText("x: " + player1.x, 80, 40);
    ctx.fillText("y: " + player1.y, 80, 60);
    window.requestAnimationFrame(updateCanvas);


  }
  // var intervalId = setInterval(updateCanvas, 5000);


  window.requestAnimationFrame(updateCanvas);

  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 38:
        player1.moveUp();
        break;
      case 40:
        player1.moveDown();
        break;
      case 37:
        player1.moveLeft();
        break;
      case 39:
        player1.moveRight();
        break;

    }


  };

}
