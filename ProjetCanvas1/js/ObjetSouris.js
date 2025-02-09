class ObjetSouris extends ObjectGraphique {
    constructor(size = 20, color = "blue") {
      super(0, 0, size, size, color);
    }
  
    update() {
      this.x = mouseX - this.w / 2;
      this.y = mouseY - this.h / 2;
    }
  }
  