//1.1
//a
const personne = {
    nom: "Dacheville",
    prenom: "Vincent",
    age: 20,
    taille: 185,
    qui : function () {
        console.log("Je suis " + this.prenom + " " + this.nom);
    },
    quiMaj : function (){
        console.log("Je suis " + this.prenom.toUpperCase() + " " + this.nom.toUpperCase())
    },
    age: function() {
        const today = new Date();
        const birthDate = new Date(this.datenaissance);
        let age = today.getFullYear() - birthDate.getFullYear();
        //J'ommet les jours et les mois, je ne considère que les années.
        return age;
    }
}
;

//b
const personne1 = {};
personne1.nom = "Dacheville";
personne1.prenom = "Vincent";
personne1.age = 20;
personne1.taille = 185;

//c
const x = personne;
x.nom = "Bernardo";

console.log(personne.nom); // Affiche "Bernardo"

//1.2
//a
console.log(personne.nom); // méthode 1 : notation avec un point
console.log(personne["prenom"]); // méthode 2 : notation entre crochets
const prop = "age";
console.log(personne[prop]); // méthode 3 : notation avec une variable contenant le nom de la propriété

//b
console.log("affichage 1.2.b");
for (let prop in personne) {
    console.log(`${prop} : ${personne[prop]}`);
}

//c
personne.poids = 70; // notation avec un point
console.log("poids : " + personne.poids);


//d
delete personne.poids;
console.log(personne.poids); //undefined (car delete)

//1.3
//a
personne.sports = {
    sport1: "football",
    sport2: "basketball",
    sport3: "tennis",
};

//b
console.log(personne.sports.sport1); // notation avec un point
console.log(personne["sports"]["sport2"]); // notation entre crochets
console.log(personne.sports["sport3"]); // combinaison des deux notations

//c
for (let sport in personne.sports) {
    console.log(`${sport} : ${personne.sports[sport]}`);
}

//d
personne.sports = [
    { nom: "Tennis", equipements: ["raquette", "balle", "filet"] },
    { nom: "Football", equipements: ["ballon", "crampons", "but"] },
    { nom: "Basketball", equipements: ["ballon", "panier"] }
];

for (let i in personne.sports) {
    console.log(personne.sports[i].nom);
    for (let j in personne.sports[i].equipements) {
        console.log(personne.sports[i].equipements[j]);
    }
}


//1.4
//a
personne.qui();
//b
personne.quiMaj();

//1.5
//a
const div = document.createElement("div");
div.textContent = Object.values(personne).join(", ");
document.body.appendChild(div);

//b
console.log(JSON.stringify(personne));

//c
personne.datenaissance = new Date(1993, 4, 15);
console.log(JSON.stringify(personne));

//d
console.log(JSON.stringify(personne));
//Je n'ai pas eu d'erreur ?

//2.1
//a,b
Object.defineProperty(personne, "lang", {
    get: function() {
        return this._lang;
    },
    set: function (value){
        this._lang = value;
    }
});

//c
//Les deux champs sont sensiblement identique, la seul différence étant la syntaxe.
// get fullName() sera généralement plus facile à lire et à comprendre.

//d
const obj = {counter : 0};

Object.defineProperty(obj, "reset", {
    get: function() {
        this.counter = 0;
    }
});

Object.defineProperty(obj, "inc", {
    get: function() {
        this.counter++;
    }
});

Object.defineProperty(obj, "dec", {
    get: function() {
        this.counter--;
    }
});

Object.defineProperty(obj, "add", {
    set: function(value) {
        this.counter += value;
    }
});

Object.defineProperty(obj, "sub", {
    set: function(value) {
        this.counter -= value;
    }
});

//2.2
//a
function Personne(nom, prenom, age, couleurYeux) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.couleurYeux = couleurYeux;
}

//b
let pere = new Personne("Dacheville", "Vincent", 20, "bleu");
let mere = new Personne("Dacheville", "Marie", 20, "marron");

//c
Personne.prototype.name = function () {
    console.log(this.prenom + " " + this.nom);
}

//d
Personne.prototype.setNom = function (nom) {
    this.nom = nom;
}

//e
let x1 = "Hello";
console.log(typeof x1); // "string"
console.log(x1.length); // 5

let x2 = 123;
console.log(typeof x2); // "number"
console.log(x2.toString()); // "123"

let x3 = true;
console.log(typeof x3); // "boolean"
console.log(x3.valueOf()); // true

let x4 = {};
console.log(typeof x4); // "object"
console.log(Object.keys(x4)); // []

let x5 = [];
console.log(typeof x5); // "object"
console.log(x5.length); // 0

//f
console.log(Math.PI); // Affiche la valeur de Pi (arrondie à 15 chiffres après la virgule, on à pas tout les chiffres...)
console.log(Math.floor(2.7)); // Affiche 2, le plus grand entier inférieur ou égal à 2.7
console.log(Math.random()); // Affiche un nombre aléatoire entre 0 et 1
console.log(Math.pow(2, 3)); // Affiche 8, la puissance de 2 à la puissance 3
console.log(Math.sqrt(9)); // Affiche 3, la racine carrée de 9

//3
//a
Personne.prototype.nationalite = "française";

//b
Personne.prototype.name = function() {
    console.log(+ this.nom + " " + this.prenom);
};

//3.1
//a
function Personne(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
    this.estomac = [];
}

//b
Personne.prototype.manger = function(nourriture) {
    if (this.estomac.length >= 10) {
        console.log("Trop de nourriture dans l'estomac !");
    } else {
        this.estomac.push(nourriture);
        console.log("Je mange " + nourriture);
    }
};

//c
Personne.prototype.digestionOK = function() {
    this.estomac = [];
};

//d
Personne.prototype.name = function() {
    console.log(this.nom + " " + this.prenom);
};

//tests
let p1 = new Personne("Dacheville", "Vincent");
p1.manger("pomme");
p1.manger("banane");
p1.manger("poire");
p1.manger("orange");
console.log(p1.estomac);
p1.digestionOK();
console.log(p1.estomac);
p1.name();

//3.2
//a
function Car(modele, conso100km) {
    this.modele = modele;
    this.conso100km = conso100km;
    this.reservoirlitre = 0;
    this.compteurkm = 0;
}

//b
Car.prototype.addfuel = function(nblt) {
    this.reservoirlitre += nblt;
}

//c
Car.prototype.drive = function(nbkm) {
    const conso = this.conso100km / 100 * nbkm;
    if (conso <= this.reservoirlitre) {
        this.reservoirlitre -= conso;
        this.compteurkm += nbkm;
    } else {
        const distanceRestante = this.reservoirlitre / this.conso100km * 100;
        console.log("Je serai à cours de carburant dans " + distanceRestante  + "km");
        this.reservoirlitre = 0;
        this.compteurkm += distanceRestante;
    }
}

//3.3
//a,b
function Baby(nom, prenom, jouetFavori){
    Personne.call(this, nom, prenom);
    this.jouetFavori = jouetFavori;
}
Baby.prototype = Object.create(Personne.prototype);
Baby.prototype.constructor = Baby;

//c
Baby.prototype.jouer = function() {
    return "Je joue avec mon jouet favori " + this.jouetFavori;
};

//tests
let b1 = new Baby("Dacheville", "Vincent", "voiture");
b1.name();
b1.manger("pomme");
console.log(b1.jouer());
