var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var player1 = new Player()
// var crocodile = new Obstacle(700, 200);
var crocodile1 = new Obstacle(700, 370);
var crocodile2 = new Obstacle(300, 200);
// var crocodile3 = new Obstacle(500, 300);



function updateCanvas() {
  ctx.clearRect(0, 0, 1500, 1200);
  ctx.font = "15px Georgia";
  player1.draw();
  // crocodile.draw();
  crocodile1.draw();
  crocodile2.draw();
  // crocodile3.draw();
  ctx.fillText("bote_x: " + player1.x, 80, 40);
  ctx.fillText("bote_y: " + player1.y, 80, 60);
  window.requestAnimationFrame(updateCanvas);
 
}

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