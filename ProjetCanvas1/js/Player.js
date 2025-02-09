class Player extends ObjectGraphique {
    constructor(x, y, w = 30, h = 30, color = "orange") {
      super(x, y, w, h, color);
      this.speed = 3;
    }
  
    move(keys) {
      if (keys["ArrowUp"]) {
        this.y -= this.speed;
      }
      if (keys["ArrowDown"]) {
        this.y += this.speed;
      }
      if (keys["ArrowLeft"]) {
        this.x -= this.speed;
      }
      if (keys["ArrowRight"]) {
        this.x += this.speed;
      }
    }
  
    // Si une collision est détectée, repositionne le joueur en fonction du côté touché
    resolveCollision(obstacle) {
      let overlapLeft = (this.x + this.w) - obstacle.x;
      let overlapRight = (obstacle.x + obstacle.w) - this.x;
      let overlapTop = (this.y + this.h) - obstacle.y;
      let overlapBottom = (obstacle.y + obstacle.h) - this.y;
  
      let minOverlap = Math.min(overlapLeft, overlapRight, overlapTop, overlapBottom);
  
      if (minOverlap === overlapLeft) {
        // Collision par la gauche de l'obstacle
        this.x = obstacle.x - this.w;
      } else if (minOverlap === overlapRight) {
        // Collision par la droite
        this.x = obstacle.x + obstacle.w;
      } else if (minOverlap === overlapTop) {
        // Collision par le haut
        this.y = obstacle.y - this.h;
      } else if (minOverlap === overlapBottom) {
        // Collision par le bas
        this.y = obstacle.y + obstacle.h;
      }
    }
  }
  