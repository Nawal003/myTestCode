//accès au formulaire
const form = document.getElementById('user-input');

// créer une fonction pour la mettre dans addEventListener, on met ce qu'on veut faire au bouton dans cette fonction
function signunHandler(event){

    event.preventDefault();
    const userNameInput = document.getElementById('username');
    const enteredUsername = userNameInput.value;
        
    const passwordInput = document.getElementById('password');
    const enteredPassword = passwordInput.value;
    //condition pour l'username
    if (enteredUsername.trim().length === 0){
        alert('Invalid input - username must not empty!');
        return;// annule la fonction(event) précédente pour ne pas continuer dans le code
    }
    //condition pour le mot de passe
    if (enteredPassword.trim().length <= 5){
        alert('Invalid input - password must be six characters or longer!');
        return;
    }
    //objets
    const user = {
        userName: enteredUsername,
        password: enteredPassword,
    };
    console.log(user);
    console.log('Hi, I am ' + user.userName);
}

//
form.addEventListener('submit', signupHandler);



// manière d'écrire en javascript procedural, mnt on remplace avec le fichier oop.js dans html (arrêt de la vidéo à 12min52)