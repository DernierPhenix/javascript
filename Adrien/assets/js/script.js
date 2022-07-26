const nom = "FLEURY";
console.log(`Mon nom est composé de ${nom.length} caractères`);

const prenom = "jean-pierre";
console.log(`Mon Prénom en Majuscule :${prenom.toUpperCase()}`);
console.log(`Sous chaine : ${prenom.substring(0,4). toUpperCase()}`)

const prenom2 = "ViTALiano";
console.log(`Le Prénom de mon fils en Minuscule : ${prenom2.toLowerCase()}`);
console.log(`Sous chaine : ${prenom2.substring(0,5)}`);

console.log (nom.split(''));

const nomComplet = "Jean-Pierre FLEURY";
console.log(nomComplet.split(" "));


let age = 30;
console.log(age);
age = 47;
console.log(age);
console.log("Mon age est : "+ age + " ans");