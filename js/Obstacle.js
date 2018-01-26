function Obstacle(x, y) {
    this.x = x;
    this.y = y;
    this.dx = -6;
    this.Image = new Image();
}
Obstacle.prototype.draw = function (bote) {
    ctx.drawImage(this.Image, this.x, this.y, 150, 150);
    this.Image.src = "./images/coco-river3.png";
    this.x += this.dx;
    if (this.x < -50) {
        this.x = 1200;
        this.y = 100;
    }
    if (this.x <= bote.x && this.y <= bote.y && this.y >= bote.y - 5) {
        this.dx = 0;
        location.href = "index2.html";
        alert('Your Death!');
    }

}
Obstacle.prototype.Collision = function (bote) {

    if (this.x <= bote.x) {

    }

}