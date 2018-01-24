function Obstacle(x,y) {
this.x = x;
this.y = y;
this.Image = new Image();
this.Image1 = new Image();
}
Obstacle.prototype.draw = function () {
    ctx.drawImage(this.Image, this.x, this.y, 150, 150);
    this.Image.src = "./images/coco-river3.png";
    
    
}   
