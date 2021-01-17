let b = document.body;
let img = new Image; 
img.src = 'Robot3.png';
b.appendChild(img);  

// class fruit{
//     rouge = true;

//     constructor(red){
//         this.rouge = red; 
//     }
// }
// let fraise = new fruit (red);


class Robot extends SuperRobot{
    jambes = 2;
    bras = 2;
    couleur = "rouge";
    yeux = 2;
    mains = 2;
    pieds = 2;

    constructor(e, a, j, b, c, y, m, p){
        super(e, a);
        this.jambes = j;
        this.bras = b;
        this.couleur = c;
        this.yeux = y;
        this.mains = m;
        this.pieds = p;
    };
    avancer(){
        console.log("le robot avance")
    };
    reculer(){
        console.log("le robot recule")
    };  
    sauter(){
        console.log("Je saute")
    };
    chanter(){
        console.log("le robot chante (je m'apelle Gérald, et pas Gérard)")
    };
    tourner(){
        console.log("je tourne")
    };
    tourner_tete(){
        console.log("tourne la tete à 360°") 
    };   
    manger(){
        console.log("il mange");
    };
} 

let robotBryan = new Robot("je suis potable", 2, 4, "blue", 4, 4, 4);
console.log(robotBryan);

robotBryan.avancer();
robotBryan.manger();
robotBryan.tourner_tete();