class Game {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.ctx = this.canvas.getContext("2d");
      this.level = 1;
      this.player = new Player(50, 50);
      this.objetsGraphiques = [];
      this.obstacles = [];
      this.sortie = null;
      this.mouseSquare = new ObjetSouris();
      this.lastTime = 0;
      this.initLevel();
    }
  
    initLevel() {
      // Réinitialiser les tableaux
      this.objetsGraphiques = [];
      this.obstacles = [];
  
      // Créer la sortie en bas à droite avec une marge
      const sortieWidth = 40;
      const sortieHeight = 40;
      this.sortie = new Sortie(
        this.canvas.width - sortieWidth - 10,
        this.canvas.height - sortieHeight - 10,
        sortieWidth,
        sortieHeight
      );
  
      // Ajoute des obstacles en fonction du niveau (niveau 1 : peu d’obstacles, puis augmentation)
      const numObstacles = this.level + 2; // Ex. niveau 1 => 3 obstacles, niveau 2 => 4, etc.
      for (let i = 0; i < numObstacles; i++) {
        const obsWidth = 50;
        const obsHeight = 50;
        const x = Math.random() * (this.canvas.width - obsWidth);
        const y = Math.random() * (this.canvas.height - obsHeight);
        // 30 % de chance pour un obstacle animé
        if (Math.random() < 0.3) {
          const dx = (Math.random() * 2 + 1) * (Math.random() < 0.5 ? 1 : -1);
          const dy = (Math.random() * 2 + 1) * (Math.random() < 0.5 ? 1 : -1);
          const obs = new ObstacleAnime(x, y, obsWidth, obsHeight, dx, dy);
          this.obstacles.push(obs);
          this.objetsGraphiques.push(obs);
        } else {
          const obs = new Obstacle(x, y, obsWidth, obsHeight);
          this.obstacles.push(obs);
          this.objetsGraphiques.push(obs);
        }
      }
  
      // Ajouter la sortie et l'objet souris aux objets graphiques
      this.objetsGraphiques.push(this.sortie);
      this.objetsGraphiques.push(this.mouseSquare);
    }
  
    mainAnimationLoop(timestamp) {
      this.update(timestamp);
      this.draw();
      requestAnimationFrame((t) => this.mainAnimationLoop(t));
    }
  
    update(timestamp) {
      // Calcul du deltaTime (optionnel)
      const deltaTime = timestamp - this.lastTime;
      this.lastTime = timestamp;
    
      // Effacer le canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
      // Mettre à jour l'objet qui suit la souris (s'il est nécessaire)
      this.mouseSquare.update();
    
      // IMPORTANT : Déplacer le joueur UNIQUEMENT via les touches
      this.player.move(keysPressed);
    
      // Mettre à jour les obstacles animés (s'ils existent)
      this.obstacles.forEach(obstacle => {
        if (obstacle instanceof ObstacleAnime) {
          obstacle.update(this.canvas.width, this.canvas.height);
        }
      });
    
      // Gestion des collisions entre le joueur et les obstacles
      this.testCollisionPlayerObstacles();
    
      // Vérifier si le joueur atteint la sortie pour changer de niveau
      if (rectsOverlap(
            this.player.x, this.player.y, this.player.w, this.player.h,
            this.sortie.x, this.sortie.y, this.sortie.w, this.sortie.h
          )) {
        this.level++;
        alert("Bravo ! Passage au niveau " + this.level + " !");
        this.resetLevel();
      }
    }
    
  
    draw() {
      // Dessiner une grille (optionnel, ici avec des cellules de 50px)
      drawGrid(this.ctx, this.canvas.width, this.canvas.height, 50);
  
      // Dessiner la sortie
      this.sortie.draw(this.ctx);
  
      // Dessiner les obstacles et autres objets graphiques
      this.objetsGraphiques.forEach((obj) => {
        // On évite de redessiner la sortie et l'objet souris (dessinés séparément si besoin)
        if (obj !== this.sortie && obj !== this.mouseSquare) {
          obj.draw(this.ctx);
        }
      });
  
      // Dessiner le joueur
      this.player.draw(this.ctx);
  
      // Dessiner le carré qui suit la souris par-dessus
      this.mouseSquare.draw(this.ctx);
    }
  
    testCollisionPlayerObstacles() {
      this.obstacles.forEach((obstacle) => {
        if (
          rectsOverlap(
            this.player.x,
            this.player.y,
            this.player.w,
            this.player.h,
            obstacle.x,
            obstacle.y,
            obstacle.w,
            obstacle.h
          )
        ) {
          this.player.resolveCollision(obstacle);
        }
      });
    }
  
    resetLevel() {
      // Réinitialiser la position du joueur
      this.player.x = 50;
      this.player.y = 50;
      // Réinitialiser le niveau (recréer obstacles et sortie)
      this.initLevel();
    }
  }
  