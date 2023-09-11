console.log("----------- \nExercie 2 \n ---------");

let phrase = "ceci est un texte";

function countWords(str) {
  return str.split(" ").length;
}

function inversePhrase(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(countWords(phrase));
console.log(inversePhrase(phrase));
