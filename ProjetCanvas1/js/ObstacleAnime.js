class ObstacleAnime extends Obstacle {
    constructor(x, y, w, h, dx = 1, dy = 1, color = "purple") {
      super(x, y, w, h, color);
      this.dx = dx;
      this.dy = dy;
    }
  
    update(canvasWidth, canvasHeight) {
      this.x += this.dx;
      this.y += this.dy;
  
      // Rebondir sur les bords du canvas
      if (this.x <= 0 || this.x + this.w >= canvasWidth) {
        this.dx *= -1;
      }
      if (this.y <= 0 || this.y + this.h >= canvasHeight) {
        this.dy *= -1;
      }
    }
  }
  