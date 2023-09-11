console.log("----------- \nExercie 1 \n ---------");

let numbers = [0, 1, 5, 56, 100, 21];

function sumTable(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

function moyTable(numbers) {
  let moy = numbers.reduce((a, b) => a + b, 0);
  return moy / numbers.length;
}

function maxTable(numbers) {
  getMax = (a, b) => Math.max(a, b);
  return numbers.reduce(getMax);
}

console.log("somme du tableau: " + sumTable(numbers));
console.log("la moyenne du tableau:" + moyTable(numbers));
console.log("le max du tableau:" + maxTable(numbers));
