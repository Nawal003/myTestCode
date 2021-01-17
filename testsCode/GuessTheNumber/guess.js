let output = document.querySelector('h2');
let button = document.querySelector('button');


let number = [Math.floor(Math.random() * 10)];

button.addEventListener('click', () => {
    let input = document.querySelector('input').value;
    if (input == number){
        output.textContent = `Bravo, tu as deviné!!, c'était le ${number}`;
    } else if (input < number){
        output.textContent = 'Oulala! Trop bas, essaye encore!';
        
    };
    if (input > number) {
        output.textContent = 'Ouf! Trop élevé, essaye encore!';

    }
});

console.log(button.addEventListener);