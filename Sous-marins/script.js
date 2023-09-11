let myTitle = "les sous marins";

let myOcean = "Nous nous trouvons dans la mer méditérannée";

console.log(document.querySelector("#title"));

document.querySelector("#title").innerHTML = myTitle;

/* document.querySelector("#ocean").innerHTML = myOcean; */

function generateNumber() {
  let myNumber;
  // Math.random() chiffre netre 0 et 1
  myNumber = Math.floor(3 * Math.random());
  // console.log(myNumber);
  return myNumber;
}

myCell = generateNumber();
console.log(myCell);

tableRows = 5;
tableColums = 5;
let ocean = [];

for (let i = 0; i < tableColums; i++) {
  ocean[i] = [];
  for (let j = 0; j < tableRows; j++) {
    ocean[i][j] = generateNumber();
  }
}

function addToHtml(myData) {
  let p = document.createElement("p");
  p.innerHTML = myData;
  document.querySelector("body").append(p);
}

console.log(ocean);

addToHtml(ocean);
