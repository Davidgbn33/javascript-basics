console.log("----------- \nExercie 3 \n ---------");

// injecter du texte dans le contenu dans la page html

// def de la function
function addToHtml(myData) {
  let p = document.createElement("p"); // création de l'élément
  p.innerHTML = myData; // injection du contenu textuel
  document.querySelector("body").append(p); // insertion dans le dom
}

let elements = ["texte", 57, "texte2", 58, "essai"];

let elementRecherche = 57;

let i = 0;

while (i < elements.length) {
  if (elementRecherche === elements[i]) {
    addToHtml(elements[i] + " " + "c'est ok");
  } else {
    addToHtml(elements[i] + " " + "pas ok");
  }
  i++;
}
