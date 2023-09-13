let yearBirthday = prompt("Quel est ton année de naissance");

let date = new Date();
let currentYear = date.getFullYear();

let age = currentYear - yearBirthday;

if (age >= 18) {
  alert(`Vous étes majeur et Vous avez ${age} ans`);
} else {
  alert(`Vous étes mineur et vous avez ${age} ans`);
}
