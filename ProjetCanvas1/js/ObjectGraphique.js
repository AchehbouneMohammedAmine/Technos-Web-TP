class ObjectGraphique {
    constructor(x, y, w, h, color = "black") {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.color = color;
    }
  
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.w, this.h);
    }
  }
  