var Player = function () {
  this.x = 0;
  this.y = 325;
  this.speed = 100;
  this.img = new Image();
  this.img1 = new Image();
  this.img2 = new Image();
  this.img3 = new Image();
  this.img.src = "./images/bote2.png";
  this.img1.src = "./images/playa-punta-cana1.jpg";
  this.img2.src = "./images/stone.png"
  this.img3.src ="./images/stone1.png"
  
  }
//FUNCIONES BASICAS DE MOVIMIENTO DEL BOTE
Player.prototype.draw = function () {
  ctx.drawImage(this.img1, 0, 0, 1500, 500);
  ctx.drawImage(this.img2, 1100, 411, 150, 90);
  ctx.drawImage(this.img3, 200, 411, 150, 90);
  ctx.drawImage(this.img, this.x, this.y, 130, 130);
  
}
Player.prototype.moveUp = function () {
  if (this.canMoveUp()) this.y -= 25
}
Player.prototype.moveDown = function () {
  if (this.canMoveDown()) this.y += 25
}
Player.prototype.moveLeft = function () {
  if (this.canMoveLeft()) this.x -= 25
}
Player.prototype.moveRight = function () {
  if (this.canMoveRight()) this.x += 25
}

Player.prototype.canMoveUp = function () {
  if (this.y <= 260) {
    return false;
  } else {
    return true;
  }
}
Player.prototype.canMoveDown = function () {
  if (this.y >= 400) {
    return false;
  } else {
    return true;
  }
}
Player.prototype.canMoveLeft = function () {
  if (this.x <= 0) {
    return false;
  } else {
    return true;
  }
}
Player.prototype.canMoveRight = function () {
  if (this.x >= 1100) {
    return false;
  } else {
    return true;
  }
  
}


