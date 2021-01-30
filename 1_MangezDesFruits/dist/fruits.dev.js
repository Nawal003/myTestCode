"use strict";

var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var score = 0;
ctx.font = '50px Georgia';
var player = {
  x: canvas.width / 2,
  y: 750,
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
var keys = [];

function init() {
  for (var i = 0; i < numberOfFruits; i++) {
    FruitsArray.push(new Fruits());
  }
}

init();

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // permet d'avoir un full rectangle sans qu'il s'étire

  ctx.drawImage(bgd, 0, 0, canvas.width, canvas.height);
  drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width * 2, player.height * 2);

  for (var i = 0; i < FruitsArray.length; i++) {
    FruitsArray[i].draw();
    FruitsArray[i].update();
  }

  movePlayer();
  ctx.fillStyle = 'white';
  ctx.fillText('Score: ' + score, 10, 50);
  requestAnimationFrame(animate);
}

animate();
window.addEventListener('keydown', function (e) {
  keys[e.key] = true;
  console.log(keys);
});
window.addEventListener('keyup', function (e) {
  delete keys[e.key];
}); //fonction Move Player

function movePlayer() {
  if (keys['ArrowRight'] && player.x < canvas.width - player.width) {
    player.x += player.speed;
  } else if (keys['ArrowLeft'] && player.x > 0) {
    player.x -= player.speed;
  }
}

;
var bang = new Image();
bang.src = './images/bang.png';

function handleCollisions() {
  for (var i = 0; i < FruitsArray.length; i++) {
    if (player.x < FruitsArray[i].x + FruitsArray[i].width && player.width) {}
  }

  console.log(handleCollisions);
}