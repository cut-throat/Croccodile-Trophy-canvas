var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var player1 = new Player();
var cc = [];


createCrocodile();
// var crocodile1 = new Obstacle(700, 370);
// var crocodile2 = new Obstacle(300, 200);
//Función que mete los Cocodrilos en el array vacío con un metodo (Math), para que los pinte de manera aleatoria
function createCrocodile() {
  var numberOfCocrodile = 2;
  for (var i = 0; i <= numberOfCocrodile; i++) {
    var random1 = Math.floor(Math.random() * 300) + 100; 
    cc.push(new Obstacle(1200, random1))
    
  }
//Con este bulce pintanmos los cocodrilos de manera aleatoria cada vez que refresca la pantalla
  function updateCanvas() {
    ctx.clearRect(0, 0, 1500, 1200);
    ctx.font = "15px Georgia";
    player1.draw();
    cc.forEach(function (coco) {
      coco.draw(player1)
    })
    //Contador de pixels sobre el canvas
    ctx.fillText("x: " + player1.x, 80, 40);
    ctx.fillText("y: " + player1.y, 80, 60);
    window.requestAnimationFrame(updateCanvas);

  }
  
//Movimientos del bote
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
