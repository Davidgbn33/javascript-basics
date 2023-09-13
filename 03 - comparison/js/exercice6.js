let table1 = [1, 5, 30];
let table2 = [2, 7, 25];

let elementCommun = false;

for (let i = 0; i < table1.length; i++) {
  for (let j = 0; j < table2.length; j++)
    if (table1[i] === table2[j]) {
      elementCommun = true;
      break;
    }
  if (elementCommun) {
    break;
  }
}
if (elementCommun === true) {
  alert("Les tableaux ont au moins un élément en commun");
} else {
  alert("Les tableaux ont aucun élémnet en commun");
}
