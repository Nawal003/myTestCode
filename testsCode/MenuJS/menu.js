//on cible les éléments du DOM
let bod = document.querySelector('body');
let header = document.querySelector('header');

//On crée la navBar
let navBar = document.createElement('nav');

//On crée une liste de menu
// let menuTopItems = [
//     'Accueil', 
//     'Actualités', 
//     'Contact', 
//     'Connexion',
// ];

//on va créer une liste d'objets
let menuTopItems = [
    {

        texte: "Accueil",
        href: "accueil"

    },
    {

        texte: "Actualités",
        href: "actualités"

    },
    {

        texte: "contact",
        href: "contact"
    
    },
    {

        texte: "Connexion",
        href: "connexion"
    
    },
];

// possible avec for (let i = 0; avec for of; foreach);
//On boucle sur la liste de menu
for (let menuItem of menuTopItems) {//menuItem va prendre successivement le textee dans menuTopItem
    //console.log(menuItem);
   // let menuLink = document.createElement('a');
   // menuLink.textContent = menuItem;
   let lien = buildLink(menuItem)// on fait appel à la fonction buildLink autant de fois 
   navBar.appendChild(lien);
}


// On ajoute la navBar à header
header.appendChild(navBar);


//On cible les éléments de type a => sous forme d'une Nodelist
//on ne peut pas faire un forEach sur getElementsByTagName car HTMLCollection
let menuLinks = document.querySelectorAll('a');
console.log(menuLinks);


// On boucle sur les liens 
// menuLinks.forEach((element) => { //element peut prendre n'importe quel nom
//     // console.log(element);
//     // element.addEventListener('mouseenter', function() {
//     //     element.style.backgroundColor = '#F27';
//     // });
//     // element.addEventListener('mouseleave', function() {
//     //     element.style.backgroundColor = 'transparent';
//     // });
// //     handleHover(element); // on ajoute un gestion d'événement à chaque lien // On commente pour montrer une autre façon de faire (1)

// // });



//gestion du Hover sur nav

navBar.addEventListener('mouseover', function(event) {
    // alert();
    console.log(event.target)// en ajoutant target on peut voir le lien que j'ai survolé
    event.target.style.backgroundColor = '#F27';

});
navBar.addEventListener('mouseout', function(event) {
    // alert();
  //  console.log(event.target)// en ajoutant target on peut voir le lien que j'ai survolé
    event.target.style.backgroundColor = 'transparent';

});


// gestion du clic sur les liens de la navBar

navBar.addEventListener('click', function(event) {
    event.preventDefault();// empêche d'aller vers une autre page si on clique sur unn lien 
    //console.log(event.target.getAttribute('href'));

    //partie qui masque tous les articles
    let article = document.querySelectorAll('article');
   // console.log(article) comme on a une nodelist on peut faire un forEach
   article.forEach((article) => {
       article.style.display = 'none';
   });

    //partie qui affiche l'article correpondant au lien 
    let linkHref = event.target.getAttribute('href');// accueil
    let articleTarget= document.getElementById(linkHref);
   // console.log(articleTarget);
   articleTarget.style.display = 'block';//tous les liens apparaissent au lieu d'un seul par lien 


});



















// accueilLink.addEventListener('mouseenter', function(){  
//    accueilLink.style.backgroundColor = '#F27';
// });
// accueilLink.addEventListener('mouseleave', function(){  
//     accueilLink.style.backgroundColor = 'transparent';
//  });// Mis dans un autre fichier "fonctions.js"




















// // ajouter un lien à la navBar (soit faire un copier/coller pour les autres mais le plus simple c'est de faire une fonction)
// let lienAccueil = document.createElement('a');
// lienAccueil.textContent = 'Accueil';
// navBar.appendChild(lienAccueil);










