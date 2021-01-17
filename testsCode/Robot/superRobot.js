class SuperRobot{
    eau = "le robot resiste à l'eau";
    antenne = 1;

    constructor(e, a){
        this.eau = e;
        this.antenne = a;
    };

    teleportation(){
        console.log("le robot va où il veut sans encombre")
    };

    dégommer(){
        console.log("le robot dégomme les autres robots (sorry)")
    };

    nage(){
        console.log("il fait même le crawl");
    };

    laser(){
        console.log("mieux vaut pas le regarder dans les yeux");
    };

}
