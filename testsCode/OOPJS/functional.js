const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

function validate(value, flag, validatorValue) { // ici on va rajouter ce qu'on a fait en oop.js dans la methode validate, et on enlève les this et on ajoute une constante globale ( cad à l'extérieur de la fonction)
    if (flag === REQUIRED) {
        return value.trim().length > 0;
    }
    if (flag === MIN_LENGTH) {
        return value.trim().length > validatorValue;
    }

}
// mnt on va pouvoir l'utiliser dans notre function signupHandler


function getUserInput(inputElementId) {
    return document.getElementById(inputElementId).value; // on créant cette nouvelle fonction on va supprimer la const UserNameInput (ici elle sera commenté en bas ) et on remplace userNameInput.value par le nom de la fonction (getUserInput), même chose pour la ligen password
}

// création d'une fonction pour créer un user

function createUser(userName, userPassword) {
    if (!validate(userName, REQUIRED) || !validate(userPassword, MIN_LENGTH, 5)) { // comme c'est une pure fonction en functional.js au lieu de mettre alert on remplace par throw new Error
        // alert('')
        throw new Error(
            'Invalid input - username or password is wrong (password should be at least six characters'
        );
    }
    return {
        userName: userName,
        password: userPassword
    };
    //mnt on peut appeler la fonction crétaion user dans dans signupHandler

}

function greetUser(user) {
    console.log('Hi. I am ' + user.userName);

}


//création d'une fonction quand je submit le formulaire 
function signupHandler(event) {
    event.preventDefault();
    // on copie/colle ce qu'on a mis dans le js procedural c'eest pas une fonction générale du coup on ne peut pas l'utiliser ou on veut, ça marche pour l'instant, du coup on crée une autre fonction (plus haut)
    // const userNameInput = document.getElementById('username');
    const enteredUsername = getUserInput('username');

    // const passwordInput = document.getElementById('password');
    const enteredPassword = getUserInput('password');
    // après avoir remplacé tout ça on a une fonction réutilisable 
    // après ça il nous faut valider le formulaire et donc on va créer une autre fonction validate (voir plus haut )

    //on appelle la fonction validate 

    // validate()

    //on appelle la fonction createUser

    try {


        const newUser = createUser(enteredUsername, enteredPassword); // ça peut créer une erreur du coup on ajoute try/ catch et on met cette const dedans mais si ça fail on met une alert 
        // console.log(newUser); // on crée une fonction pour saluer le nouvel user à la place de ce console log on remplace par la nouvelle  fonction greetUser
        greetUser(newUser);
    } catch (err) {
        alert(err.message);

    }


}




// ici notre code va être organiser autour des fonctions
// on peut appeler la fonction comme on veut, ici connectForm
// pour accéder au formulaire je crée une const
// pour pouvoir réutiliser la fonction on rajoute des paramètres 
// Mnt on peut la réutiliser, parce qu'on met rien qui se réfère au HTML, et on peut l'utiliser pour n'importe quel formulaire 
function connectForm(formId, formSubmitHandler) {
    const form = document.getElementById(formId);// on remplace user-Input par (voir entre()) 
    form.addEventListener('submit', formSubmitHandler);
};

// pour appeler la fonction du coup on met, on peut appeler ce qu'on veut dans la fonction 

connectForm('user-input', signupHandler)