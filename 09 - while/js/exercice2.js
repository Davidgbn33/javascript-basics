console.log("----------- \nExercie 2 \n ---------");

// injecter du texte dans le contenu dans la page html

// def de la function
function addToHtml(myData) {
  let p = document.createElement("p"); // création de l'élément
  p.innerHTML = myData; // injection du contenu textuel
  document.querySelector("body").append(p); // insertion dans le dom
}

// variable pour la boucle
let m = 0;
let x = 0;

// boucle avec affichage dans la page html
while (m < 10) {
  m++;
  x += m;
  addToHtml(x);
}
