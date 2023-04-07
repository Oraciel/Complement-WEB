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