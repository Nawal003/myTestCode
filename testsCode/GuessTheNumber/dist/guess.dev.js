"use strict";

var output = document.querySelector('h2');
var button = document.querySelector('button');
var number = [Math.floor(Math.random() * 10)];
button.addEventListener('click', function () {
  var input = document.querySelector('input').value;

  if (input == number) {
    output.textContent = "Bravo, tu as devin\xE9!!, c'\xE9tait le ".concat(number);
  } else if (input < number) {
    output.textContent = 'Oulala! Trop bas, essaye encore!';
  }

  ;

  if (input > number) {
    output.textContent = 'Ouf! Trop élevé, essaye encore!';
  }
});
console.log(button.addEventListener);