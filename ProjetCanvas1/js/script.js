window.onload = function () {
    const game = new Game("gameCanvas");
    requestAnimationFrame((timestamp) => game.mainAnimationLoop(timestamp));
  };
  