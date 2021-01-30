// const abricot = new Image();
// abricot.src = './images/abricot.png';
// const cerises = new Image();
// cerises.src = './images/cerises.png';
// const mangue = new Image();
// mangue.src = './images/mangue.png';


const numberOfFruits = 5;
let fruitsArray = [];

const fruits = new Image();
fruits.src = './images/fruits2.png';


class Fruits {
    constructor() {
        this.x =canvas.width + Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * canvas.height;
        // this.number = Math.random() * 1;
        this.size = Math.random() * 40 + 60;
        this.speed = Math.random() * 2 + 1;
        //spriteSheet
        this.frameX= Math.floor(Math.random() * 3);
        this.frameY= Math.floor(Math.random() * 3);
        this.spriteSize = 400/3;
    }
    
    draw() {
        
        // ctx.drawImage(abricot, this.x , this.y , this.size, this.size)
        ctx.drawImage(fruits, this.frameX * this.spriteSize, this.frameY * this.spriteSize, this.spriteSize, this.spriteSize, this.x, this.y, this.size, this.size);// 9 arguments, s = src; (fruits, sx, sy, sw, sw, dx, dy, dw, dh)
    
    }
   
    update() {
        if (this.y > canvas.height) {
            this.y = 10 - this.size;
            this.x = Math.random() * canvas.width;
            this.size = Math.random() * 80 + 80;
            this.speed = Math.random() * 5 + 2;
            

        }
        this.y += this.speed;
    }
}

function handleFruits(){
    if(frame%100 === 1){
        fruitsArray.unshift(new Fruits);
    }
    // for (let i = 0; i < fruitsArray.length; i++){
    //     fruitsArray[i].update();
    // }
    if (fruitsArray.length > 30){
        fruitsArray.pop(fruitsArray[i]);
    }
    // console.log(handleFruits);
}