let total = prompt("Quel est le montant de votre achat");

if (total >= 100) {
  total = total * 0.9;
  console.log(`Voici votre montant après réduction: ${total}`);
} else if (total < 100 && total >= 50) {
  total = total * 0.95;
  console.log(`Voici votre montant après réduction: ${total}`);
} else {
  console.log(`Votre montant est de ${total}`);
}
