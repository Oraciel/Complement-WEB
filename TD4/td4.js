//1.1
//a
const personne = {
    nom: "Dacheville",
    prenom: "Vincent",
    age: 20,
    taille: 185,
};

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
