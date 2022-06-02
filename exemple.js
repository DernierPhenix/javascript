//Fonction Anonyme:
(function () {
  console.log("Je suis une fonciton anonyme");
})();

/*Créer une fonction demander age()
et qui va se commenter dans une fenetre de renseignement de l'age
et qui affichera dans un popup " vous avec X ans"
*/

// function prevoirAge() {
//   let age = prompt("Quel age avez vous ?");
//   // age = parseInt(age); //convertit en nombre ENTIER - Attention 35.5 => 35
//   // age = parseFloat(age); //convertit un nombre  à virgule compris en chaine de caracteres en nombre DECIMAL

//   age = Number(age); //convertit en nombre ENTIER
//   return age;
// }

// alert("Vous allez bientôt avoir " + (prevoirAge() + 1) + " ans");

/*Transformer un nombre en chaine de caracteres
ex: nombre = 45;
1ere methode: nombreEnString = nombre + "";
2eme methode: nombreEnString = nombre.toString(); RECOMMANDÉE*/

//Exercice paramètres par défaut
//let preparation = 15, cuisson = 25;

function cuisiner(nbrGateau, tempspreparation = 15, tempsCuisson = 20) {
  let resultat = nbrGateau * (tempspreparation + tempsCuisson);
  return resultat;
}
let tempspreparationChoco = cuisiner(3); // appel la fonction pour Temps préparation  des 4 gateaux choco
let tempspreparationFraisier = cuisiner(2, 20); // appel la fonction cuisiner pour 1 fraisier avec tempspreparation de 20min
console.log(tempspreparationChoco); // affiche le temps de préparation gateau choco
console.log(tempspreparationFraisier); // affiche le temps de préparation gateau fraise
console.log(tempspreparationChoco + tempspreparationFraisier); // affiche temps pour les 5 gateaux

//Les paramètres par défaut:
// let nombreUn = 5, nombreDeux = 9;
// function addition(nombreA, nombreB = 10) {
//     let resultat = nombreA + nombreB;
//     return resultat;

// }

// console.log(addition(nombreUn, nombreDeux));

//autre exercice sur les Fonctions qui retourne qqch.
// let nombreUn = 5, nombreDeux = 9;
// function addition(nombreA, nombreB) {
//     let resultat = nombreA + nombreB;
//     return resultat;

// }

// function division(nombreA, nombreB) {
//     let resultat = nombreB / nombreA;
//     return resultat;

// }
// let resultAddition = addition(nombreUn, nombreDeux);
// let resultDivision = division(nombreUn, nombreDeux);

// console.log(resultAddition * resultDivision);

//Fonctions qui retrounent qqch:
// let nombre1 = 4, nombre2 = 8;

// function addition(nombreA, nombreB) {
//     let resultat = nombreA + nombreB;
//     // console.log(resultat); affiche le resultat mais ne "retourne pas"le résultat.
//     return resultat; // return va "stocker" la valeur de resultat et le programme s'arrête juste après.
// };
// console.log(addition(nombre1, nombre2));

//AUtre méthode variables Globales
// let crie = "Toujours plus Haut ... Lentement !"; //Globale qui est definit à la racine du projet(ici on attribut une autre valeur à la variable crie).
// function crieDeGuerre() {
//     let crie = "Toujours plus fort ... en douceur ! ";
//     console.log(crie);
// }
// crieDeGuerre();
// console.log(crie);

//Variables Globales:
// let crie; //Globale qui est definit à la racine du projet(ici en dehors de la fonction).
// function crieDeGuerre() {
//     crie = " Toujours plus fort ... en douceur ! ";
//     console.log(crie);
// }
// crieDeGuerre();
// console.log(crie);

// function crieDeGuerre() {
//     let crie = " Toujours plus fort ... en douceur ! "; //locale car erreur si on ecrit "console.log(crie)"après la fonction.
//     console.log(crie);
// }
// crieDeGuerre();
// console.log(crie);

//Ajouter des paramètres à une fonction

// function addition(nombre1, nombre2) {
//     console.log(nombre1 + nombre2)
// }
// addition(5,9.4);

//Exercise : Créer une fonction qui affiche le message Bonjour Prénom dans un popup.
// function direBonjour(prenom) {
//     alert("Bonjour " + prenom)
// }
// direBonjour("Duong");

//Créer une fonction:
// function direBonjour() {
//     alert("Bonjour à vous");
// }
// direBonjour() //On appelle la fonction avec son nom et les parenthèses (Très importantes les parenthèses)

//Demander des renseignements:
// const age = prompt('Entrez votre age : ');
// alert("Bonjour, vous avez " + age + " ans");

// Message de confirmation:
// if(confirm('Souhaitez vous confirmer')) {
//oui
//     alert('Merci');
// }else{
//Non
//     alert('Annulation');
// }

//Affiche une boite de dialogue:
//alert('Hello World!');

//afficher "Bonjour Prenom + nom :"
// let prenom      = "JPierre";
// let nom         = "Fleury";
// console.log("Bonjour " + prenom + ' ' + nom +' !')

//faire un calcul simple :
// let nombre1      = 8, nombre2 = 4, result;
// result           = (nombre1 * nombre2) + 8;
// result +=5;
// result --;
// console.log(result)
