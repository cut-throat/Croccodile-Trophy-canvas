function Player() {
  
  this.img = new Image();
  this.img.scr = "./images/bote.png";
  imgScale = 150 / 150;
  this.x = 0;
  this.y = 0;
  img.onload = function () {
    ctx.drawImage(img, 175, 450, 35 * imgScale, 50);
    Player.prototype.draw = function (ctx) {

      ctx.drawImage(this.img, this.x, 0, 100, 100);



    };


  };
}