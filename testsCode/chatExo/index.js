class Voiture {
    roues = 4;
    marque = 'audi';
    couleur = 'noire';
    portes = 4;
    moteur = new Moteur()

    constructor(r, m, c, p) {
        this.roues = r;
        this.marque = m;
        this.couleur = c;
        this.portes = p;

    }

}

class Moteur {
    puissance = 100;

    constructor() {

    }
}

console.log(new Voiture);