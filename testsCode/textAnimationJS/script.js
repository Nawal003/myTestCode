// en premier on déclare des variables globales
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];

//handle mouse // ici on crée des objets pour stocker les coordonées de la souris
let mouse = {
    x: null,
    y: null,
    radius: 250// plus le nombre est élevé plus les particules explosent
}

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log(mouse.x, mouse.y);
});


ctx.fillStyle = 'white'
ctx.font = '30px Verdana';
ctx.fillText('A', 0, 30);// (lettre, x, y)
// ctx.strokeStyle = 'white';
// ctx.strokeRect(0, 0, 100, 100);
const data = ctx.getImageData(0, 0, 100, 100) //(top, left, width, left)

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
// ici la fonction init utilisera le programme pour remplir le tableau particule avec les particules objets
function init() {
    particleArray = [];
    for (let i = 0; i < 500; i++){
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particleArray.push(new Particle(x, y));
    }
    // particleArray.push(new Particle(200, 200));
    // particleArray.push(new Particle(300, 300));

}
init();
console.log(particleArray);//18minutes
// ici on crée une boucle animation qui dessine nos canvas pour chaque frame 
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleArray.length; i++){
        particleArray[i].draw();    
        particleArray[i].update(); 

    }
    requestAnimationFrame(animate);
}
animate();