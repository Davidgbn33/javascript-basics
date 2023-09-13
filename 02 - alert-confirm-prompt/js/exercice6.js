// Étape 1 : Créez un menu interactif pour l'opération
let operation = parseInt(
  prompt(
    "Choisissez une opération :\n1. Addition\n2. Soustraction\n3. Multiplication\n4. Division\nVeuillez remplir un chiffre de 1 à 4 pour choisir le calcul"
  )
);

if (operation !== 1 && operation !== 2 && operation !== 3 && operation !== 4) {
  alert("Opération impossible à réaliser");
} else {
  let number1 = parseFloat(prompt("veuillez entrer le premier chiffre"));
  let number2 = parseFloat(prompt("Veuillez entrer le second chiffre"));

  if (!isNaN(number1) && !isNaN(number2)) {
    switch (operation) {
      case 1:
        let result1 = number1 + number2;
        alert(`Le résultat est ${result1}`);
        break;
      case 2:
        let result2 = number1 - number2;
        alert(`Le résultat est ${result2}`);
        break;
      case 3:
        let result3 = number1 * number2;
        alert(`Le résultat est ${result3}`);
        break;
      case 4:
        if (number2 !== 0) {
          let result4 = number1 / number2;
          alert(`Le résultat est ${result4}`);
        } else {
          alert("la division par Zero est impossible");
        }
        break;
      default:
        alert("opération invalide");
    }
  } else {
    alert("Les nombres sont invalides");
  }
}
