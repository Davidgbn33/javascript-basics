let score = 0;
let answer1 = "non";
let answer2 = "oui";

if (confirm("Voulez vous commencer le quizz") === true) {
  let question1 = prompt("JS est bien ? oui ou non");
  if (question1 === answer1) {
    score += 1;
  }
  let question2 = prompt("php est bien ? oui ou non");
  if (question2 === answer2) {
    score += 1;
  }
}
alert(`Votre score est ${score}`);
