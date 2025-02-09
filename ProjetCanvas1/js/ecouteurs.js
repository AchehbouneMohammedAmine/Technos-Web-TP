let keysPressed = {};
let mouseX = 0;
let mouseY = 0;

window.addEventListener("keydown", function (e) {
  keysPressed[e.key] = true;
});

window.addEventListener("keyup", function (e) {
  keysPressed[e.key] = false;
});

window.addEventListener("mousemove", function (e) {
  const canvas = document.getElementById("gameCanvas");
  const rect = canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});
