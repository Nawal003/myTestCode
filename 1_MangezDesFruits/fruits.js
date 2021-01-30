const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let score = 0;
ctx.font = '50px Georgia';

let frame = 0;


const player = {
    x: canvas.width/2,
    y: 750,
    width: 48,//168/4 taille de la spritesheet pour localiser le perso
    height: 64,//256/4
    frameX: 3,
    frameY: 3,
    speed: 9,
    moving: false,
  
};

const playerSprite = new Image();
playerSprite.src = "./images/ryuk.png";
const bgd = new Image();
bgd.src = "./images/backgd.png";

   const keys= [];


function init(){
    for (let i = 0; i < numberOfFruits; i++){
        fruitsArray.push(new Fruits());
    }
}
init();


function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
}


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)// permet d'avoir un full rectangle sans qu'il s'étire
    ctx.drawImage(bgd, 0, 0, canvas.width, canvas.height);
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width * 2, player.height * 2)
    for (let i = 0; i < fruitsArray.length; i++){
        fruitsArray[i].draw();
        fruitsArray[i].update();
    }
    handleFruits();
    handleCollisions();
    
    movePlayer();
    ctx.fillStyle = 'white';
    ctx.fillText('Score: ' + score , 10, 50);
    requestAnimationFrame(animate);

}
animate();

window.addEventListener('keydown', function(e){
    keys[e.key] = true;
    // console.log(keys);

});
window.addEventListener('keyup', function(e){
    delete keys[e.key];
});


//fonction Move Player

function movePlayer(){
    if (keys['ArrowRight'] && player.x < canvas.width - player.width){
        player.x += player.speed;
    }else if(keys['ArrowLeft'] && player.x > 0){
        player.x -= player.speed;

    }
};

const bang = new Image();
bang.src = './images/bang.png'


function handleCollisions(){
    for (let i = 0; i < fruitsArray.length; i++){
        if (player.x < fruitsArray[i].x + fruitsArray[i].width && player.x + player.width > fruitsArray[i].x &&
            ((player.y < 0 + fruitsArray[i].size && player.y + player.height > 0 || (player.y > canvas.height - fruitsArray[i].size && player.y + player.height < canvas.height)))
            ){
            ctx.drawImage(bang, player.x, player.y, 50, 50)
           return true
        }

    }
    console.log(handleCollisions);

}
// ((bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0) || (bird.y > canvas.height - obstaclesArray[i].bottom && bird.y + bird.height < canvas.height))) {
