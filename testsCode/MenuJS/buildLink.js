// function buildLink(texte){//texte est un paramètre de la fonction
//     let menuLink = document.createElement('a');
//     menuLink.textContent = texte;
//     return menuLink;


// }

function buildLink(linkObject){//texte est un paramètre de la fonction
    let menuLink = document.createElement('a');
    menuLink.textContent = linkObject.texte; //ça renvoie la propriété de texte dans l'objet du menuTopItems du coup on rajout .texte
    menuLink.href = linkObject.href;
    return menuLink;

}