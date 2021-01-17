// en premier on déclare des variables globales
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];
let adjustX = 10;
let adjustY = -5

//handle mouse // ici on crée des objets pour stocker les coordonées de la souris
let mouse = {
    x: null,
    y: null,
    radius: 200// plus le nombre est élevé plus les particules explosent
}

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log(mouse.x, mouse.y);

});


ctx.fillStyle = 'white'
ctx.font = '30px Verdana';
ctx.fillText('Cool', 0, 30);// (lettre, x, y)
// ctx.strokeStyle = 'white';
// ctx.strokeRect(0, 0, 100, 100);
const textCoordinates = ctx.getImageData(0, 0, 100, 100) //(top, left, width, height)

// ici on créé un programme qui sera utilisé pour créer des particules
class Particle {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 3;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 40) + 5;// en changeant la densité le 30 par 150 les particules laissent un vide autour de la souris (en plus gros) et le + 1 par 50 c'est bcp plus rapide

    }
    draw(){
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    //distance entre chaque particule
    update(){
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance -distance) /maxDistance;// entre 0 et 1
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius){// on remplace le 300 par mouse.radius
            this.x -= directionX; // on remplace forceDirectionX * 3 par directionX même chose pour Y et on remplace le signe plus par le - pour que les particules soient push away
            this.y -= directionY;
            // this.size = 30;
        } else {
            // this.size = 3;// taille origine line34 mais je veux que les particules aillent à leur position d'origine du coup je rajoute un if 
            if ( this.x !== this.baseX){
                let dx = this.x - this.baseX;
                this.x -= dx/10;                
            }
            if (this.y !== this.baseY);
            let dy = this.y - this.baseY;
            this.y -= dy/10;
        }
         
    }
}
console.log(textCoordinates.data)

// ici la fonction init utilisera le programme pour remplir le tableau particule avec les particules objets
function init() {
    particleArray = [];
    for (let y = 0, y2 = textCoordinates.height; y < y2; y++){
        for (let x = 0, x2 = textCoordinates.width; x < x2; x++){
            if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128){// 128 signifie 50% opacity parce que le nombre pour alpha est compris entre 0 et 255 clamped array (voir console log (textCoodinattextCoordinates)) rgba (255, 255, 255, 1) pour la couleur blanche
                let positionX = x + adjustX;
                let positionY = y + adjustY;
                particleArray.push(new Particle(positionX * 20, positionY * 25));
            }
        }
    }
    
    

    // particleArray.push(new Particle(200, 200));
    // particleArray.push(new Particle(300, 300));

}
init();
console.log(particleArray);
// ici on crée une boucle animation qui dessine nos canvas pour chaque frame 
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleArray.length; i++){
        particleArray[i].draw();    
        particleArray[i].update(); 

    }
    connect();// permet de faire des liens entre chaque particule
    requestAnimationFrame(animate);
}
animate();

function connect(){
    let opacityValue = 1;
    for (let a = 0; a < particleArray.length; a++){
        for (let b = a; b < particleArray.length; b++){
            // let dx = mouse.x - this.x;
            // let dy = mouse.y - this.y;
            // let distance = Math.sqrt(dx * dx + dy * dy);
            let dx = particleArray[a].x - particleArray[b].x;
            let dy = particleArray[a].y - particleArray[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            opacityValue = 1 - (distance/100);
            ctx.strokeStyle = 'rgba(255, 255, 255,' + opacityValue + ')';
            

            if (distance < 100){               
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(particleArray[a].x, particleArray[a].y);
                ctx.lineTo(particleArray[b].x, particleArray[b].y);
                ctx.stroke();
            }
        }
    }
}