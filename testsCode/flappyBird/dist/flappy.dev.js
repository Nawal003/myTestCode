"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bird =
/*#__PURE__*/
function () {
  function Bird() {
    _classCallCheck(this, Bird);

    this.x = 150;
    this.y = 200;
    this.vy = 0;
    this.width = 20;
    this.height = 20;
    this.weight = 1;
  }

  _createClass(Bird, [{
    key: "update",
    value: function update() {
      this.vy += this.weight;
      this.y += this.vy;
    }
  }, {
    key: "draw",
    value: function draw() {
      ctx.fillStyle = 'red';
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }, {
    key: "flap",
    value: function flap() {
      this.vy;
    }
  }]);

  return Bird;
}();