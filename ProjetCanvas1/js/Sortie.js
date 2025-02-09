class Sortie extends ObjectGraphique {
    constructor(x, y, w, h, color = "green") {
      super(x, y, w, h, color);
    }
  
    // Si vous préférez une sortie circulaire, décommentez la méthode ci-dessous
    /*
    draw(ctx) {
      drawCircleImmediat(ctx, this.x + this.w / 2, this.y + this.h / 2, this.w / 2, this.color);
    }
    */
  }
  