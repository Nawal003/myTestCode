"use strict";

var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;
var spacePressed = false; //space bar true or false 

var angle = 0; //for bird Up and Down 

var hue = 0; //color

var frame = 0;
var score = 0;
var gamespeed = 2;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(10, canvas.height - 90, 50, 50);
  requestAnimationFrame(animate);
}

animate();
window.addEventListener('keydown', function (e) {
  // console.log(e.code);
  if (e.code === "Space") spacePressed = true;
});
window.addEventListener('keyup', function (e) {
  // console.log(e.code);
  if (e.code === "Space") spacePressed = false;
});