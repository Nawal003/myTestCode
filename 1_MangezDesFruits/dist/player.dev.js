"use strict";

var player = {
  size: 0,
  x: canvas.width / 2,
  y: 800,
  width: 48,
  //168/4 taille de la spritesheet pour localiser le perso
  height: 64,
  //256/4
  frameX: 3,
  frameY: 3,
  speed: 9,
  moving: false
};
var playerSprite = new Image();
playerSprite.src = "./images/ryuk.png";
var bgd = new Image();
bgd.src = "./images/backgd.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function movePlayer() {
  if (keys['ArrowRight'] && player.x < canvas.width - player.width) {
    player.x += player.speed;
  } else if (keys['ArrowLeft'] && player.x > 0) {
    player.x -= player.speed;
  }
}

;