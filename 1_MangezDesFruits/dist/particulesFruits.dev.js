"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// const abricot = new Image();
// abricot.src = './images/abricot.png';
// const cerises = new Image();
// cerises.src = './images/cerises.png';
// const mangue = new Image();
// mangue.src = './images/mangue.png';
var numberOfFruits = 5;
var FruitsArray = [];
var fruits = new Image();
fruits.src = './images/fruits2.png';

var Fruits =
/*#__PURE__*/
function () {
  function Fruits() {
    _classCallCheck(this, Fruits);

    this.x = canvas.width + Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * canvas.height; // this.number = Math.random() * 1;

    this.size = Math.random() * 40 + 60;
    this.speed = Math.random() * 2 + 1; //spriteSheet

    this.frameX = Math.floor(Math.random() * 3);
    this.frameY = Math.floor(Math.random() * 3);
    this.spriteSize = 400 / 3;
  }

  _createClass(Fruits, [{
    key: "draw",
    value: function draw() {
      // ctx.drawImage(abricot, this.x , this.y , this.size, this.size)
      ctx.drawImage(fruits, this.frameX * this.spriteSize, this.frameY * this.spriteSize, this.spriteSize, this.spriteSize, this.x, this.y, this.size, this.size); // 9 arguments, s = src; (fruits, sx, sy, sw, sw, dx, dy, dw, dh)
    }
  }, {
    key: "update",
    value: function update() {
      if (this.y > canvas.height) {
        this.y = 10 - this.size;
        this.x = Math.random() * canvas.width;
        this.size = Math.random() * 80 + 80;
        this.speed = Math.random() * 5 + 2;
      }

      this.y += this.speed;
    }
  }]);

  return Fruits;
}();