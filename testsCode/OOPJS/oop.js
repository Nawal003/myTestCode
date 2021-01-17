// Pour la validation on pourrait juste copier/coller la fonction avec condition mais comme on n'a envie de faire du C/C du coup 
// validate on peut l'appeller sans instancier cette classe
// value j'attend d'avoir une valeur, verifier l'username et le password 
// flag va nous permettre de nous autoriser d'identifier quelle validation effectuer
// ValidateValue: validate our value c'est optionnel qui nous autorise à configurer notre validation 
//pour que ça fonctionne on doit ajouter une autre methode REQUIRED
class Validator {
    static REQUIRED = 'REQUIRED'; // valeur unique 
    static MIN_LENGTH = 'MIN_LENGTH';// Identifiants que l'on utiliser

    static validate (value, flag, validatorValue){// ceci est aussi une methode
        if (flag === this.REQUIRED) {
            return value.trim().length > 0; // je veux qu'il me retourne true si value n'est pas vide et false si c'est vide
        }
        if (flag === this.MIN_LENGTH) {
            return value.trim().length > validatorValue; // après ça on peut rajouter un if dans la class UserInputForm dans signupHandler
        }


    }
}


//Création d'un nouvel user, ici je définis comment l'user doit être et tout ce qu'il doit avoir, on définit les valeurs avec lesquelles on crée un user
//permet de créer un nouvel objet 
// 3e partie je veux saluer l'user (greet)
class User {
    constructor(uName, uPassword){
        this.userName = uName;
        this.password = uPassword;    
    }

    greet() {
        console.log('Hi. I am ' + this.userName);
    }
}







class UserInputForm {
    constructor() {
        this.form = document.getElementById('user-input');
        this.userNameInput = document.getElementById('username'); // toutes les const qu'on a mis dans le js procedural sont dans une class 
        this.passwordInput = document.getElementById('password');

        this.form.addEventListener('submit',this.signupHandler.bind(this)) // on pourrait creer une fonction anonyme mais comme on est dans une classe et qu'on veut écrire une POO ça a plus de sens de créer une methode 
    }
    //creation d'une méhtode = une fonction dans un objet dans une class ici 
    signupHandler(event) {
        event.preventDefault();
        const enteredUserName = this.userNameInput.value; // ça ça ne fonctionne pas parce que this keyword dans cette methode ne va se réferer à cette classe du coup pour annuler ce comportement on ajoute à la fonction this.signupHandler.bind(this) pour que le this se refère à la même chose que dans constructor 
        const enteredPassword = this.passwordInput.value;


        //On peut checker si Validator (class) on peut l'appeler comme ça parce que c'est une methode statique et
        // pas besoin de l'instancier à une classe, si le resultat est vrai l'id entré qui est la value et Validator.REQUIRED comme flag 
        // si ça renvoie vrai c'est bon mais si ça renvoie faux indiqué par "!", je veux qu'on m'affiche une erreur la partie suivante après || (et) check la validation du password 
        if (
            !Validator.validate(enteredUserName, Validator.REQUIRED) || 
            !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5) 
        ) { 
            alert(
                'Invalid input - username or password is wrong (password should be at least six characters).'
            );
            return;

        }

        // mnt on veut créer un nouvel identifiant on va dans la class user (plus haut)
        // après avoir créer la class User, on peut mnt créer un nouvel user

        const newUser = new User(enteredUserName, enteredPassword);
        console.log(newUser);
        newUser.greet();
        // Pour rendre vivante la class inputForm 
    }
}

// on peut appeler l'UserInputForm pour l'instancier à la class UserInputForm et donc devient vivante 

new UserInputForm();


//Notre code ici à la différence de procedural,nous avons coupé le code en plusieurs entités. 
// Ici les class on peut les utilisé où on veut à l'inverse de jS procedural où on a besoin de copier/coller à chaque fois 
// Fin POO On passe à JS Functional