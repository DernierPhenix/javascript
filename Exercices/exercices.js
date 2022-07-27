exercices
let poids = prompt("Quel est votre poids en kg ?");
let taille = prompt("Quel est votre taille en cm ?");
let tailleDeCmEnM = taille * 0.01;
let imc = poids / (tailleDeCmEnM * tailleDeCmEnM);

function calculIMC(poids, tailleDeCmEnM) {
  let imc = poids / (tailleDeCmEnM * tailleDeCmEnM);
  alert(`Votre IMC est de ${imc}`);
  return imc;
}
calculIMC(poids, tailleDeCmEnM);

if (imc < 18.5) {
  alert("Vous êtes en sous-poids");
} else if (imc >= 18.5 && imc <= 24.9) {
  alert("Vous êtes de corpulence normale");
} else if (imc >= 25 && imc <= 29.9) {
  alert("Vous êtes en surpoids");
} else if (imc >= 30 && imc <= 34.9) {
  alert("Vous êtes en obésité modérée");
} else alert("Vous êtes en obésité sévère");

// Ce que vous devez réaliser :

//     Créer une fonction abracadabra qui ne contiendra aucun paramètre.

//     Demander le prénom, le nom et l'age de notre utilisateur grâce à une boîte de dialogue.

//     Stocker ces trois informations grâce à trois variables : prenom, nom et age (ne compliquons pas les choses !)

//      Afficher, toujours grâce à une boîte de dialogue, la phrase "Sapristi ! On ne m'avait pas prévenu que c'était vous, [prenom] !
//      Euh... Je veux dire... Monsieur le grand magicien[nom]! Cela fait déjà[age] ans que vous faites rayonner notre contrée!".
// Solution :
// function abracadabra() {
//   // Déclaration de la fonction
//   let prenom = prompt("Quel est votre prénom ?"); // Déclaration des variables - prenom dans une boîte de dialogue
//   let nom = prompt("Quel est votre nom ?"); // Déclaration des variables - nom dans une boîte de dialogue
//   let age = prompt("Quel est votre âge ?"); // Déclaration des variables - age dans une boîte de dialogue
//   alert(
//     // Affichage d'une boîte de dialogue - avec le texte et les variables
//     "Sapristi ! On ne m'avait pas prévenu que c'était vous, " +
//       prenom +
//       " ! Euh... Je veux dire... Monsieur le grand magicien " +
//       nom +
//       " ! Cela fait déjà " +
//       age +
//       " ans que vous faites rayonner notre contrée ! Vous êtes vraiment un vrai magicien ! "
//   );
// }
// abracadabra();

let age = prompt("Entrer votre âge : ");
alert("Bonjour, vous avez " + age + " ans.");


