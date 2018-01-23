function Obstacle() {


    imgScale = 100 / 100;

        this.x = 0;
        this.y = 0;
    }
    Obstacle.prototype.draw = function () {
        
        var img = new Image();
        img.scr = "./images/coco-river.png";
        ctx.drawImage(img, this.x, 0, 100, 100);
        

    };
