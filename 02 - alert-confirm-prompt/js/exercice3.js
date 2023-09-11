let yearOfBirth = prompt("What's your year of birth ?");

let currentDate = new Date();

let currentYear = currentDate.getFullYear();

let age = currentYear - yearOfBirth;

alert(`your age is ${age}.`);
