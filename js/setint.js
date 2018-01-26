var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d');
var ball = {
  x: 200,
  y: 30,
  vx: 5,
  vy: 2,
  radius: 25,
  color: '#fff',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function update() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ball.x += ball.vx;
  ball.y += ball.vy;
  ball.draw();
   if (ball.y + ball.vy > canvas.height - 25 || ball.y + ball.vy < 25) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width - 25 || ball.x + ball.vx < 25) {
    ball.vx = -ball.vx;
  }
}


var intervalId = setInterval(update, 20);


document.getElementById("faster").onclick = function(){
  ball.vx *= 1.1;
}

document.getElementById("slower").onclick = function(){
  ball.vx *= 0.9;
}
