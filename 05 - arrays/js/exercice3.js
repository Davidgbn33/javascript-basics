let fruits2 = ["Banane", "Fraise", "Pomme"];

// ajout fin de ligne
fruits2.push("peche");

console.log(fruits2);

// splice(index , nbre d'élément)
fruits2.splice(1, 1);

console.log(fruits2);

// splice( index , nbre d'élément, remplacer)
fruits2.splice(2, 1, "abricot");

console.log(fruits2);

// ajout au début du tableau
fruits2.unshift("cerise");

console.log(fruits2);
